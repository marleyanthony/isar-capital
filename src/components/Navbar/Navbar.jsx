import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navbar__logo-wrapper">
          <i className="fas fa-chart-line navbar__logo-chart-icon" />
          <h1 className="navbar__logo">ISAR</h1>
        </div>
      </Link>
      <ul className="navbar__links-wrapper">
        <Link to="/">
          <li className="navbar__nav-item">Home</li>
        </Link>
        <Link to="/about">
          <li className="navbar__nav-item">About</li>
        </Link>
        <Link to="/contact">
          <li className="navbar__nav-item navbar__nav-item--last-nav-item">Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar