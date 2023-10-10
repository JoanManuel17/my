import React from 'react';
import { Link, NavLink} from 'react-router-dom'; 

const NavComponent = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavComponent;