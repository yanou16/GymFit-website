import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // 3D Card Tilt Effect
    const cards = document.querySelectorAll('.feature-card');
    
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = -(x - centerX) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };

    const handleMouseLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  const heroImageUrl = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80";

  return (
    <div className="home">
      <div 
        className="hero" 
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="hero-content">
          <h1 className="animate-fade-in">Transform Your Life</h1>
          <p className="animate-fade-in-delay">Start your fitness journey today</p>
          <Link to="/membership" className="cta-button animate-fade-in-delay-2">Get Started</Link>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <div className="card-3d-content">
            <div className="card-front">
              <img src="https://images.unsplash.com/photo-1576678927484-cc907957088c" alt="Equipment" className="feature-image" />
              <h3>State-of-the-art Equipment</h3>
              <p>Access to premium fitness equipment</p>
            </div>
            <div className="card-back">
              <h3>Equipment Features</h3>
              <ul>
                <li>Latest Cardio Machines</li>
                <li>Free Weights Area</li>
                <li>Functional Training Zone</li>
                <li>Recovery Equipment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="feature-card reveal animate-slide-up delay-1">
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b" alt="Trainer" className="feature-image" />
          <h3>Expert Trainers</h3>
          <p>Work with certified fitness professionals</p>
          <Link to="/trainers" className="feature-link">Meet Trainers →</Link>
        </div>

        <div className="feature-card reveal animate-slide-up delay-2">
          <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155" alt="Schedule" className="feature-image" />
          <h3>Flexible Schedule</h3>
          <p>Classes that fit your lifestyle</p>
          <Link to="/schedule" className="feature-link">View Schedule →</Link>
        </div>
      </div>

      <div className="journey-section reveal animate-fade-in">
        <h2>Your Fitness Journey Starts Here</h2>
        <p>We provide the best environment for your workout with:</p>
        <ul className="journey-features">
          <li className="animate-slide-right">State-of-the-art equipment</li>
          <li className="animate-slide-right delay-1">Expert personal trainers</li>
          <li className="animate-slide-right delay-2">Flexible membership options</li>
          <li className="animate-slide-right delay-3">Clean and spacious facility</li>
        </ul>
        <Link to="/about" className="learn-more-btn">Learn More</Link>
      </div>
    </div>
  );
};

export default Home;