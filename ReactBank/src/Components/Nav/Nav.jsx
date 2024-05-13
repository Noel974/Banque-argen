import React from 'react';
import { NavLink } from 'react-router-dom';
import Logobanque from '../../Assets/Logo/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import { useSelector, useDispatch } from 'react-redux';
import { deauthenticateUser } from '../../Redux/Reducer/UserReducer';

const Nav = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated); 
	const user = useSelector((state) => state.user.user);
	console.log("user: ", user);
  const dispatch = useDispatch();
  const handleUser = () => {
    localStorage.clear();
    dispatch(deauthenticateUser());
  };

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={Logobanque} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isAuthenticated ? (
          <>
            <NavLink className="main-nav-item" to="/user">
              <FontAwesomeIcon icon={faUserCircle} />
              {user?.firstName || "User"}
            </NavLink>

            <NavLink onClick={handleUser} className="main-nav-item" to="/">
              <FontAwesomeIcon icon={faSignOutAlt} />
              Sign Out
            </NavLink>
          </>
        ) : (
          <NavLink className="main-nav-item" to="/login"> 
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;
