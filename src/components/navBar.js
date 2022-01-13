import React from 'react';
import { NavLink } from 'react-router-dom';
import './calculator.css';

const Navbar = () => (
  <div className="navContainer">
    <h1 className="Heading">Math Magicians</h1>
    <div>
      <nav className="navBar">
        <ul className="navBarUl">
          <li key={1}>
            <NavLink className="navLink" to="/">Home | </NavLink>
          </li>
          <li key={2}>
            <NavLink className="navLink" to="/calculator"> Calculator | </NavLink>
          </li>
          <li key={3}>
            <NavLink className="navLink" to="/quote"> Quotes</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);
export default Navbar;
