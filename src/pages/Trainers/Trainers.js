import React from 'react';
import { FaArrowLeft, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Trainers.css';

const Trainers = () => {
  const trainers = [
    {
      name: 'Sarah Johnson',
      specialty: 'Yoga & Meditation',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      experience: '8 years',
      description: 'Certified yoga instructor specializing in mindfulness and body awareness.',
      social: {
        instagram: 'https://www.instagram.com/enyare13/',
        linkedin: 'https://www.linkedin.com/in/rayane-lz-b7752b224/'
      }
    },
    {
      name: 'Mike Thompson',
      specialty: 'HIIT & Circuit Training',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
      experience: '10 years',
      description: 'Expert in high-intensity workouts and functional training.',
      social: {
        instagram: 'https://www.instagram.com/enyare13/',
        linkedin: 'https://www.linkedin.com/in/rayane-lz-b7752b224/'
      }
    },
    {
      name: 'John Davis',
      specialty: 'Strength & Conditioning',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      experience: '12 years',
      description: 'Professional bodybuilder and certified strength coach.',
      social: {
        instagram: 'https://www.instagram.com/enyare13/',
        linkedin: 'https://www.linkedin.com/in/rayane-lz-b7752b224/'
      }
    },
    {
      name: 'Emma Wilson',
      specialty: 'Cardio & Endurance',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      experience: '6 years',
      description: 'Former athlete specializing in endurance and cardiovascular fitness.',
      social: {
        instagram: 'https://www.instagram.com/enyare13/',
        linkedin: 'https://www.linkedin.com/in/rayane-lz-b7752b224/'
      }
    }
  ];

  return (
    <div className="trainers-page">
      <Link to="/" className="back-button">
        <FaArrowLeft /> Back to Home
      </Link>

      <div className="trainers-header">
        <h1>Our Trainers</h1>
        <p>Meet our expert fitness trainers</p>
      </div>

      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <div key={index} className="trainer-card">
            <div className="trainer-image">
              <img src={trainer.image} alt={trainer.name} />
            </div>
            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <h4>{trainer.specialty}</h4>
              <p className="experience">Experience: {trainer.experience}</p>
              <p className="description">{trainer.description}</p>
              <div className="trainer-social">
                <a href={trainer.social.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href={trainer.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
