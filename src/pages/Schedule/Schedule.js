import React, { useState } from 'react';
import { FaClock, FaDumbbell, FaRunning, FaHeartbeat, FaChild, FaArrowLeft } from 'react-icons/fa';
import { GiMeditation } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import './Schedule.css';

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState('monday');

  const schedule = {
    monday: [
      { time: '06:00 AM', class: 'Morning Yoga', trainer: 'Sarah', icon: <GiMeditation />, level: 'All Levels' },
      { time: '09:00 AM', class: 'HIIT Training', trainer: 'Mike', icon: <FaRunning />, level: 'Intermediate' },
      { time: '04:00 PM', class: 'Strength Training', trainer: 'John', icon: <FaDumbbell />, level: 'Advanced' },
      { time: '06:00 PM', class: 'Cardio Blast', trainer: 'Emma', icon: <FaHeartbeat />, level: 'All Levels' },
    ],
    tuesday: [
      { time: '07:00 AM', class: 'Power Yoga', trainer: 'Sarah', icon: <GiMeditation />, level: 'Intermediate' },
      { time: '10:00 AM', class: 'Circuit Training', trainer: 'Mike', icon: <FaRunning />, level: 'Advanced' },
      { time: '03:00 PM', class: 'Weight Training', trainer: 'John', icon: <FaDumbbell />, level: 'All Levels' },
      { time: '05:00 PM', class: 'Endurance', trainer: 'Emma', icon: <FaHeartbeat />, level: 'Intermediate' },
    ],
    // Add more days as needed
  };

  return (
    <div className="schedule-page">
      <Link to="/" className="back-button">
        <FaArrowLeft /> Back to Home
      </Link>

      <div className="schedule-header">
        <h1>Class Schedule</h1>
        <p>Find your perfect workout time</p>
      </div>

      <div className="schedule-container">
        <div className="schedule-nav">
          {Object.keys(schedule).map((day) => (
            <button
              key={day}
              className={`schedule-nav-item ${selectedDay === day ? 'active' : ''}`}
              onClick={() => setSelectedDay(day)}
            >
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </button>
          ))}
        </div>

        <div className="schedule-grid">
          {schedule[selectedDay].map((item, index) => (
            <div key={index} className="schedule-card">
              <div className="schedule-card-header">
                <span className="schedule-time">
                  <FaClock /> {item.time}
                </span>
                <span className="schedule-level">{item.level}</span>
              </div>
              <div className="schedule-card-body">
                <div className="schedule-icon">{item.icon}</div>
                <h3>{item.class}</h3>
                <p>Trainer: {item.trainer}</p>
              </div>
              <button className="schedule-book-btn">Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
