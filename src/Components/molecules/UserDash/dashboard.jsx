import React from 'react';
import { FaUser, FaHome, FaCheckCircle, FaMoneyBillWave, FaHandHoldingUsd, FaEllipsisH } from 'react-icons/fa';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="profile-pic"></div>
        <nav className="nav-menu">
          <a href="#" className="nav-link"><FaUser className="icon"/> Profile</a>
          <a href="#" className="nav-link"><FaHome className="icon"/> Home</a>
        </nav>
      </aside>
      <main className="main-content">
        <div className="card"><FaCheckCircle className="icon"/> Attendance</div>
        <div className="card"><FaMoneyBillWave className="icon"/> Money</div>
        <div className="card"><FaHandHoldingUsd className="icon"/> Loan</div>
        <div className="card"><FaEllipsisH className="icon"/> Other</div>
      </main>
    </div>
  );
};

export default Dashboard;
