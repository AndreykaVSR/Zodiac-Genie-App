import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
        <Link to='' className='NavBar-link' onClick = {props.handleLogout} >LOG OUT</Link>
        &nbsp;&nbsp;|NavBAr|&nbsp;&nbsp;&nbsp;
        <span className='NavBar-welcome'>WELCOME back, {props.user.name}</span>
    </div>
    :
    <div className='NavBar-Link'>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
        <header className='NavBar-text'>Welcome &nbsp; to &nbsp; Z O D I A C &nbsp;  G E N I E</header>
      {nav}
    </div>
  );
};
 
export default NavBar;