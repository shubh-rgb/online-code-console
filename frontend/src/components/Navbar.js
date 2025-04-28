// src/components/Navbar.js
import React from 'react';

const Navbar = ({ toggleTheme, currentTheme }) => (
  <nav className="navbar">
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#compiler">Code Editor</a></li>
      <li><a href="#languages">Languages</a></li>
      <li><a href="#examples">Examples</a></li>
      <li><a href="#community">Community Forum</a></li>
      <li><a href="#about">About Us</a></li>
      <li><button onClick={() => alert('Login Modal Placeholder')}>Login</button></li>
      <li>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {currentTheme === 'light' ? '🌙 Dark' : '☀ Light'}
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
