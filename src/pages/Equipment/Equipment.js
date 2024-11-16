import React from 'react';
import { FaArrowLeft, FaDumbbell, FaBiking, FaRunning, FaHeartbeat, FaWalking } from 'react-icons/fa';
import { GiWeightLiftingUp, GiBoxingGlove, GiJumpingRope, GiMuscleUp } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import './Equipment.css';

const Equipment = () => {
  const equipment = [
    {
      name: 'Strength Training',
      description: 'Professional grade free weights, barbells, and weight machines.',
      icon: <FaDumbbell />,
      items: ['Smith Machines', 'Free Weights (2-50kg)', 'Olympic Barbells', 'Power Racks']
    },
    {
      name: 'Cardio Zone',
      description: 'Latest cardio equipment with integrated fitness tracking.',
      icon: <FaRunning />,
      items: ['Treadmills', 'Ellipticals', 'Stair Masters', 'Rowing Machines']
    },
    {
      name: 'Functional Training',
      description: 'Versatile equipment for dynamic workouts.',
      icon: <GiMuscleUp />,
      items: ['Kettlebells', 'Medicine Balls', 'Resistance Bands', 'TRX Systems']
    },
    {
      name: 'Boxing Area',
      description: 'Full boxing and martial arts training equipment.',
      icon: <GiBoxingGlove />,
      items: ['Punching Bags', 'Speed Bags', 'Boxing Gloves', 'Training Pads']
    },
    {
      name: 'Cycling Studio',
      description: 'Premium indoor cycling bikes for intense cardio sessions.',
      icon: <FaBiking />,
      items: ['Spin Bikes', 'Smart Trainers', 'Heart Rate Monitors', 'Cycling Shoes']
    },
    {
      name: 'Accessories',
      description: 'Wide range of accessories for varied workouts.',
      icon: <GiJumpingRope />,
      items: ['Yoga Mats', 'Jump Ropes', 'Foam Rollers', 'Exercise Balls']
    }
  ];

  return (
    <div className="equipment-page">
      <Link to="/" className="back-button">
        <FaArrowLeft /> Back to Home
      </Link>

      <div className="equipment-header">
        <h1>Our Equipment</h1>
        <p>Discover our state-of-the-art fitness equipment</p>
      </div>

      <div className="equipment-grid">
        {equipment.map((category, index) => (
          <div key={index} className="equipment-card">
            <div className="equipment-icon">
              {category.icon}
            </div>
            <div className="equipment-info">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <ul className="equipment-list">
                {category.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipment;
