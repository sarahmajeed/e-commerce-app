import React from 'react';
import logo from '../../logo.svg';
import './Navbar.scss';

const navSlide = () => {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('nav-active');
  const navLinks = document.querySelectorAll('.nav-links li');
  const burger = document.querySelector('.burger');
  burger.classList.toggle('toggle');

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
    }
  });
};

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
      <div onClick={navSlide} className='burger'>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  );
};

export default Navbar;
