import React from 'react';
import './Classes.css';

const Classes = () => {
  return (
    <div className="classes-page">
      <header className="classes-header">
        <h1>Our Classes</h1>
        <p>Choose from our wide range of fitness classes</p>
      </header>

      <div className="classes-container">
        <div className="class-item">
          <div className="class-image yoga"></div>
          <div className="class-info">
            <h2>Yoga</h2>
            <p className="schedule">Mon, Wed, Fri - 8:00 AM</p>
            <p>Find balance, flexibility and strength through our yoga classes.</p>
            <button className="join-button">Join Class</button>
          </div>
        </div>

        <div className="class-item">
          <div className="class-image cardio"></div>
          <div className="class-info">
            <h2>Cardio Blast</h2>
            <p className="schedule">Tue, Thu - 7:00 AM</p>
            <p>High-energy cardio workouts to boost your endurance.</p>
            <button className="join-button">Join Class</button>
          </div>
        </div>

        <div className="class-item">
          <div className="class-image strength"></div>
          <div className="class-info">
            <h2>Strength Training</h2>
            <p className="schedule">Mon, Wed, Fri - 6:00 PM</p>
            <p>Build muscle and increase your strength with expert guidance.</p>
            <button className="join-button">Join Class</button>
          </div>
        </div>

        <div className="class-item">
          <div className="class-image spinning"></div>
          <div className="class-info">
            <h2>Spinning</h2>
            <p className="schedule">Daily - 5:00 PM</p>
            <p>Intense cardio workout on stationary bikes.</p>
            <button className="join-button">Join Class</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;