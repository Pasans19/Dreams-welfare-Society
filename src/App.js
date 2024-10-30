import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Homemain from './Home/home';
import DashboardPannel from './Pages/userdashboard/dashboard';
import AdminDashboard from './Components/molecules/Admindash/admindashboard'; // Ensure this is the correct import
import DashboardPannel2 from './Pages/Admindash/admindashboard';
import Member from './Pages/Addmember/Member';
import DashboardPanne3 from './Pages/AttendanceSheet/attendanceSheet';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homemain />} />
          <Route path="/dashboard" element={<DashboardPannel />} />
          <Route path="/admindashboard" element={<DashboardPannel2 />} />
          <Route path="/members" element={<Member />} />
          <Route path="/attendance-sheet" element={<DashboardPanne3 />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
