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
        <NavLink end activeClassName="active" to="/">  Rockets  </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/missions">  Missions </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/myprofile"> My Profile </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
