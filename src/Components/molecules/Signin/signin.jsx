import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sign.css';

const SignInForm = () => {
  const [name, setName] = useState('pasans'); // Default username for user
  const [password, setPassword] = useState('12345'); // Default password for user
  const [role, setRole] = useState('user'); // Default role
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Password:', password);
    console.log('Role:', role);

    // Check the credentials and navigate to the appropriate dashboard
    if (role === 'user' && name === 'pasans' && password === '12345') {
      navigate('/dashboard');
    } else if (role === 'admin' && name === 'meedum' && password === '123456') {
      navigate('/adminDashboard');
    } else if (role === 'guest' && name === 'meedum' && password === '123456') {
      navigate('/adminDashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="sign-in-wrapper">
      <div className="sign-in-form-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} className="sign-in-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="guest">Guest</option>
            </select>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
