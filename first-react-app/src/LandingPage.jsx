import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({ onGetStarted, onLoginClick, onRegisterClick }) => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="header">
        <h1 className="logo">KRISHISIKSHA</h1>
        <div className="header-buttons">
          <button className="button primary" onClick={onLoginClick}>Login</button>
          <button className="button secondary" onClick={onRegisterClick}>Register</button>
        </div>
      </header>

      <section className="hero">
        <h2 className="main-title">Empowering Rural India with Knowledge</h2>
        <p className="subtitle">Learn about modern farming, digital literacy, and entrepreneurship - all in one platform, designed for rural communities for agricultural development.</p>
        <button className="button get-started" onClick={onGetStarted}>
          Get Started
        </button>
      </section>

      <section className="features">
        <div className="card highlight-card" onClick={() => navigate('/modern-farming')}>
          <h3>Farming Encyclopedia</h3>
          <p>Smart techniques, irrigation, crop rotation & more.</p>
        </div>
        <div className="card" onClick={() => navigate('/digital-literacy')}>
          <h3>Digital Literacy</h3>
          <p>Learn smartphone, internet, and UPI basics.</p>
        </div>
        <div className="card" onClick={() => alert('Coming soon')}>
          <h3>Entrepreneurship</h3>
          <p>Start, grow, and market your own rural business.</p>
        </div>

        <div className="wide-card">
          <h3>Modern Farming Techniques</h3>
          <p>Innovative practices for high yield, sustainability, and profitability.</p>
        </div>
      </section>

      <footer className="footer">
        © 2025 AgriShiksha. Empowering Villages, One Lesson at a Time.
      </footer>
    </div>
  );
};

export default LandingPage;
