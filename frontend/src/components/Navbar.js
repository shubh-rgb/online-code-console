// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/me')
      .then(res => res.json())
      .then(data => setUser(data.user));
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/console">Code Editor</Link></li>
          <li><Link to="/topics">Explore</Link></li>
          <li><Link to="/examples">Examples</Link></li>
          <li><Link to="/community">Community Forum</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul className="nav-actions">
          {user ? (
            <>
              <li>👤 {user.displayName}</li>
              <li>
                <a href="/logout">
                  <button className="btn">Logout</button>
                </a>
              </li>
            </>
          ) : (
            <li>
              <a href="/auth/google">
                <button className="btn btn-google">Login</button>
              </a>
            </li>
          )}
          <li>
            <button onClick={toggleTheme} className="theme-toggle-btn">
              {currentTheme === 'light' ? '🌙 Dark' : '☀ Light'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
