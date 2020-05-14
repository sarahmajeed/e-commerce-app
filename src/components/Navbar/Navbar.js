import React from 'react';
import logo from '../../logo.svg';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <ul className='nav-links'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Pricing</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <div className='burger'>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  );
};

export default Navbar;
