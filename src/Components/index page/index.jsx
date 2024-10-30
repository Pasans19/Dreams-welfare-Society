// src/index.js
import React from 'react';
import './index.css';

const Index = () => {
  return (
    <div className="index-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Dreams Welfare Society</h1>
        <p>Connecting communities and transforming lives.</p>
        <button className="cta-button">Join Us Today</button>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Dreams Welfare Society is dedicated to uplifting communities through
          various outreach programs and support initiatives. Learn more about how
          we are making a difference!
        </p>
      </section>

      {/* Recent Events Section */}
      <section className="events">
        <h2>Our Recent Events</h2>
        <div className="event-cards">
          <div className="card">
            <h3>Charity Run 2024</h3>
            <p>An inspiring run to raise funds for education.</p>
          </div>
          <div className="card">
            <h3>Tree Planting Day</h3>
            <p>Join us in creating a greener tomorrow!</p>
          </div>
          <div className="card">
            <h3>Community Cleanup</h3>
            <p>Making our surroundings clean and beautiful.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Reach out to us for any questions or support inquiries.</p>
        <button className="cta-button">Get in Touch</button>
      </section>
    </div>
  );
};

export default Index;
