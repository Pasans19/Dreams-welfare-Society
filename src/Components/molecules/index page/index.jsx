import React from 'react';
import './index.css';

// Example images – replace these with your own
import heroImage from './hero.jpg';
import event1 from './event1.png';
import event2 from './event2.jpg';
import event3 from './event3.jpg';
import contactImage from './contact.jpg';
import chairmanImage from './aaaaa.jpg';
import secretaryImage from './aaaaa.jpg';
import treasurerImage from './aaaaa.jpg';

const Index = () => {
  return (
    <div className="index-container">

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <h1>Welcome to Dreams Welfare Society</h1>
          <p>Empowering communities through unity and compassion.</p>
          <button className="cta-button">Read more</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          Dreams Welfare Society is dedicated to uplifting and empowering communities through 
          education, environmental conservation, and support initiatives.
        </p>
      </section>

      {/* Recent Events Section */}
      <section className="events">
        <h2>Our Recent Events</h2>
        <div className="event-cards">
          <div className="card" style={{ backgroundImage: `url(${event1})` }}>
            <div className="card-overlay">
              <h3>Charity Run 2024</h3>
              <p>Raising funds for education and community support.</p>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${event2})` }}>
            <div className="card-overlay">
              <h3>Tree Planting Day</h3>
              <p>Working together for a greener tomorrow.</p>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${event3})` }}>
            <div className="card-overlay">
              <h3>Community Cleanup</h3>
              <p>Beautifying and cleaning our shared spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet Our Current Top board</h2>
        <div className="team-cards">
          <div className="card" style={{ backgroundImage: `url(${chairmanImage})` }}>
            <div className="card-overlay">
              <h3>Chairman</h3>
              <p>Rathanasara Thero</p>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${secretaryImage})` }}>
            <div className="card-overlay">
              <h3>Secretary</h3>
              <p>Mr.Tharaka Dananjaya</p>
            </div>
          </div>
          <div className="card" style={{ backgroundImage: `url(${treasurerImage})` }}>
            <div className="card-overlay">
              <h3>Treasurer</h3>
              <p>Mr.Tharindu Lakruwan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" style={{ backgroundImage: `url(${contactImage})` }}>
        <div className="contact-overlay">
          <h2>Contact Us</h2>
          <p>Reach out for collaborations or support inquiries.</p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </section>
    </div>
  );
};

export default Index;
