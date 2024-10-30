import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaUsers, FaCogs, FaArrowLeft } from 'react-icons/fa';
import { AiFillProfile } from 'react-icons/ai';
import { RiMoneyDollarCircleLine, RiFileList2Line } from 'react-icons/ri';
import { MdPayment, MdEventNote } from 'react-icons/md';
import { GiArchiveRegister, GiGiftOfKnowledge } from 'react-icons/gi';
import './admindashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleAttendanceClick = () => {
    // Navigate to the attendance sheet page
    navigate('/attendance-sheet');
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="profile-section">
          <AiFillProfile className="icon" />
          <h2>Profile</h2>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                <FaHome className="icon" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/members" activeClassName="active">
                <FaUsers className="icon" /> Members
              </NavLink>
            </li>
            <li>
              <NavLink to="/settings" activeClassName="active">
                <FaCogs className="icon" /> Settings
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="logo-section">
          <img
            src={require('./Screenshot_2024-03-17_194227-removebg-preview.png')}
            alt="Logo"
            className="logo"
          />
        </div>
        <button className="back-button">
          <FaArrowLeft className="icon" /> Back
        </button>
      </div>
      <div className="main-content">
        <div className="grid-container">
          <div className="grid-item" onClick={handleAttendanceClick}>
            <MdEventNote className="icon" /> Attendance
          </div>
          <div className="grid-item">
            <RiMoneyDollarCircleLine className="icon" /> Money
          </div>
          <div className="grid-item">
            <MdPayment className="icon" /> Loan
          </div>
          <div className="grid-item">
            <GiArchiveRegister className="icon" /> Other
          </div>
          <div className="grid-item">
            <GiGiftOfKnowledge className="icon" /> Waraprasada
          </div>
          <div className="grid-item">
            <RiFileList2Line className="icon" /> Reports
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
