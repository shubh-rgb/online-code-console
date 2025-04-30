// src/components/Navbar.js
import React from 'react';

const Navbar = ({ toggleTheme, currentTheme }) => (
  <nav className="navbar">
    <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/console">Code Editor</Link></li>
        <li><Link to="/topics">Languages</Link></li>
        <li><Link to="/examples">Examples</Link></li>
        <li><Link to="/community">Community Forum</Link></li>
        <li><Link to="/about">About Us</Link></li>
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
