import React, { useState } from 'react';
import './membersform.css';

const MembersForm = () => {
  const [members, setMembers] = useState([]);
  const [member, setMember] = useState({
    name: '',
    id: '',
    age: '',
    contact: '',
    address: '',
    birthday: '',
  });
  const [viewedMember, setViewedMember] = useState(null);

  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleAddMember = () => {
    setMembers([...members, member]);
    setMember({ name: '', id: '', age: '', contact: '', address: '', birthday: '' });
  };

  const handleEditMember = (index) => {
    const editedMember = members[index];
    setMember(editedMember);
    handleDeleteMember(index);
  };

  const handleDeleteMember = (index) => {
    const newMembers = [...members];
    newMembers.splice(index, 1);
    setMembers(newMembers);
  };

  const handleViewMember = (index) => {
    setViewedMember(members[index]);
  };

  const handleBack = () => {
    console.log('Back button clicked');
  };

  return (
    <div className="container">
      <h2 className="heading">Add New Member</h2>
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Member Name"
          value={member.name}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="id"
          placeholder="Member ID"
          value={member.id}
          onChange={handleChange}
          className="input"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={member.age}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={member.contact}
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={member.address}
          onChange={handleChange}
          className="input"
        />
        <input
          type="date"
          name="birthday"
          placeholder="Birthday"
          value={member.birthday}
          onChange={handleChange}
          className="input"
        />
        <div className="buttonGroup">
          <button onClick={handleBack} className="button backButton">Back</button>
        </div>
        <div className="buttonGroup">
          <button onClick={handleAddMember} className="button">Add</button>
          <button onClick={() => handleEditMember()} className="button">Edit</button>
          <button onClick={() => handleDeleteMember()} className="button">Delete</button>
        </div>
      </div>
      <div className="memberList">
        <h3 className="subHeading">Members List</h3>
        {members.map((member, index) => (
          <div key={index} className="memberItem">
            <p>Name: {member.name}</p>
            <p>ID: {member.id}</p>
            <p>Age: {member.age}</p>
            <p>Contact: {member.contact}</p>
            <p>Address: {member.address}</p>
            <p>Birthday: {member.birthday}</p>
            <div className="buttonGroup">
              <button onClick={() => handleEditMember(index)} className="button">Edit</button>
              <button onClick={() => handleDeleteMember(index)} className="button">Delete</button>
              <button onClick={() => handleViewMember(index)} className="button viewButton">View</button>
            </div>
          </div>
        ))}
        {viewedMember && (
          <div className="viewedMemberDetails">
            <h3 className="subHeading">Viewed Member Details</h3>
            <p>Name: {viewedMember.name}</p>
            <p>ID: {viewedMember.id}</p>
            <p>Age: {viewedMember.age}</p>
            <p>Contact: {viewedMember.contact}</p>
            <p>Address: {viewedMember.address}</p>
            <p>Birthday: {viewedMember.birthday}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembersForm;
