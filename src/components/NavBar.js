import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const NavBar = () => (
  <nav>
    <div className="logo">
      <img src={logo} alt={logo} />
      <h2 className="logo-title">Space Travelers&apos; Hub</h2>
    </div>
    <ul>
      <li>
        <NavLink end className={({ isActive }) => (isActive ? 'active' : '')} to="/">  Rockets  </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/missions">  Missions </NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/myprofile"> My Profile </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
