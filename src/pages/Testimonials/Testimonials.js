import React from 'react';
import './Testimonials.css';
import testimonial1 from '../../images/testimonial1.jpg';
import testimonial2 from '../../images/testimonial2.jpg';
import testimonial3 from '../../images/testimonial3.jpg';

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <header className="testimonials-header">
        <h1>What Our Members Say</h1>
        <p>Real stories from real members</p>
      </header>

      <div className="testimonials-container">
        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src={testimonial1} alt="Sarah Johnson" />
          </div>
          <div className="testimonial-content">
            <div className="quote">"</div>
            <p>Lost 30 pounds in 3 months! The trainers here are amazing and the atmosphere is so motivating!</p>
            <div className="testimonial-author">
              <h3>Sarah Johnson</h3>
              <span className="member-status">Member since 2023</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src={testimonial2} alt="Mike Thompson" />
          </div>
          <div className="testimonial-content">
            <div className="quote">"</div>
            <p>The best gym I've ever been to. Great equipment and the community is fantastic!</p>
            <div className="testimonial-author">
              <h3>Mike Thompson</h3>
              <span className="member-status">Member since 2022</span>
            </div>
          </div>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src={testimonial3} alt="Emily Davis" />
          </div>
          <div className="testimonial-content">
            <div className="quote">"</div>
            <p>Transformed my lifestyle completely. The personal training sessions are worth every penny!</p>
            <div className="testimonial-author">
              <h3>Emily Davis</h3>
              <span className="member-status">Member since 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
