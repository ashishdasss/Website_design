import React from 'react';
import logo from '../assets/logo.png'

const BoxWithContent2 = () => {
  return (
    <section className="box-container">
      <div className="box">
        <div className="box-content">
          <h2>Ready to <span>Secure</span> Your Software ?</h2>
          <p>Get started with MuteEngine today and protect your software with the most advanced security technology available.</p>
          <button className="box-button">Start Now</button>
        </div>
      </div>
      <footer className="footer">
        <nav className="footer-navbar">
        <div className="logo1">
            <img src={logo} alt="MutaEngine Logo" className="footer-logo-img" />
          </div>
          <ul className="footer-nav-links">
            <li>Overview</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Features</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </nav>
      </footer>
    </section>
  );
};

export default BoxWithContent2;