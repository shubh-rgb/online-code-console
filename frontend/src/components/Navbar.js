// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, provider, signInWithPopup, signOut, onAuthStateChanged } from '../firebase';

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

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
              <li><button className="btn" onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <li><button className="btn btn-google" onClick={handleLogin}>Login</button></li>
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
