import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connexion } from '../../Redux/Action/loginaction';
import {profileAction} from '../../Redux/Action/profilaction';

import { useSelector } from 'react-redux';

function ConnectionForm () {
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  const navigate = useNavigate();

  const user = useSelector(state => state.user);
  const dispatch  =useDispatch();

  const handleLogin =async (e)=>{
    e.preventDefault();

    try{
    await dispatch(connexion({email, password}));
      console.log("Utilisateur connecte", user);

      // Après la connexion, récupérez le profil de l'utilisateur
      dispatch(profileAction(user.token));
      (navigate("/user"))
    } catch (error){
      console.error( "ERROR DE CONNECTION", error);
    }
  };
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} /> 
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button" onClick={handleLogin}><Link to="/user">Sign In</Link></button> 
        </form>
      </section>
    </main>
  );
};

export default ConnectionForm;
