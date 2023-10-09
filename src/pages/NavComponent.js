import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

import './NavComponent.css'; // Import your CSS file for styling

const NavComponent = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link" activeClassName="active">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" activeClassName="active">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;