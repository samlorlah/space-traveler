import React from 'react';
// import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const NavBar = () => (
  <nav>
    <div className="logo">
      <img src={logo} alt={logo} height="80" />
      <h2 className="logo-title">Space Travelers&apos; Hub</h2>
    </div>
    <ul>
      <li>
        Rockets
      </li>
      <li>
        Missions
      </li>
      <li>
        My Profile
      </li>
    </ul>
  </nav>
);

export default NavBar;
