import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import './Screenshot_2024-03-17_194227-removebg-preview.png'

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <div className="logo">
        <img src={require('./Screenshot_2024-03-17_194227-removebg-preview.png')} alt="Dreams Welfare Society" />
        <Navbar.Brand href="#home">Dreams welfare society</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
         
      </Nav>
        <Nav>
          <Nav.Link href="#notifications">Notification</Nav.Link>
          <Nav.Link href="#signin">Sign In</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
