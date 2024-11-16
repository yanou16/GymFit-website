import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaDumbbell } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <FaDumbbell /> GymFit
      </Link>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
        <li>
          <Link to="/trainers" onClick={toggleMenu}>Trainers</Link>
        </li>
        <li>
          <Link to="/schedule" onClick={toggleMenu}>Schedule</Link>
        </li>
        <li>
          <Link to="/equipment" onClick={toggleMenu}>Equipment</Link>
        </li>
        <li>
          <Link to="/membership" onClick={toggleMenu}>Membership</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-button">Join Now</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;