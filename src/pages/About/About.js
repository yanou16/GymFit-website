import React from 'react';
import { FaArrowLeft, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Link to="/" className="back-button">
        <FaArrowLeft /> Back to Home
      </Link>

      <div className="about-header">
        <h1>About Us</h1>
        <p>Welcome to our gym! Learn more about our facilities and mission.</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are dedicated to helping our members achieve their fitness goals in a 
            motivating and supportive environment. Our state-of-the-art facility and 
            expert trainers are here to guide you on your fitness journey.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Facilities</h2>
          <p>
            Our gym features modern equipment, spacious workout areas, and dedicated 
            spaces for various fitness activities. From cardio to strength training, 
            we have everything you need to succeed.
          </p>
        </div>

        <div className="about-section">
          <h2>Connect With Us</h2>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/enyare13/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram /> Follow on Instagram
            </a>
            <a 
              href="https://www.linkedin.com/in/rayane-lz-b7752b224/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
