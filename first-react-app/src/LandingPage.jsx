import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onGetStarted, onLoginClick, onRegisterClick }) => {
  return (
    <div className="landing-container">
      <header className="header">
        <h1 className="logo">Krishishiksha</h1>
        <div className="header-buttons">
          <button className="button primary" onClick={onLoginClick}>Login</button>
          <button className="button secondary" onClick={onRegisterClick}>Register</button>
        </div>
      </header>
      <section className="hero">
        <h2>Empowering Rural India with Knowledge</h2>
        <p>
          Learn about modern farming, digital literacy, and entrepreneurship — all in one platform,
          designed for rural communities for agricultural development.
        </p>
        <button className="button get-started" onClick={onGetStarted}>
          Get Started
        </button>
      </section>
      <section className="features">
        <div className="card">
          <h3>Modern Farming</h3>
          <p>Smart techniques, irrigation, crop rotation & more.</p>
        </div>
        <div className="card">
          <h3>Digital Literacy</h3>
          <p>Learn smartphone, internet, and UPI basics.</p>
        </div>
        <div className="card">
          <h3>Entrepreneurship</h3>
          <p>Start, grow, and market your own rural business.</p>
        </div>
      </section>
      <footer className="footer">
        © 2025 AgriShiksha. Empowering Villages, One Lesson at a Time.
      </footer>
    </div>
  );
};

export default LandingPage;
