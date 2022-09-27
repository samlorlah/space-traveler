import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/planet.png';

const NavBar = () => (
  <nav>
    <div className="logo">
      <img src={logo} alt={logo} height="80" />
      <h2 className="logo-title">Space Travelers&apos; Hub</h2>
    </div>
    <ul>
      <li>
        <Link to="/">  Rockets  </Link>
      </li>
      <li>
        <Link to="/missions">  Missions </Link>
      </li>
      <li>
        <Link to="/myprofile"> My Profile </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
