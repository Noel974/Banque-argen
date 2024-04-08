import React from 'react';
import { NavLink } from 'react-router-dom';
import Logobanque from '../../Assets/Logo/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={Logobanque} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className="main-nav-item" to="/login">
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
