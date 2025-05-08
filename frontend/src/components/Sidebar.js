// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; // optional

const Sidebar = ({ visible }) => {
  return (
    <aside className={`sidebar ${visible ? 'show' : 'hide'}`}>
      <h3>📚 Index</h3>
      <ul className="sidebar-links">
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/console">💻 Code Editor</Link></li>
        <li><Link to="/topics">📚 Topics</Link></li>
        <li><Link to="/examples">📝 Examples</Link></li>
        <li><Link to="/git-cheat-sheet">🔧 Git Cheat Sheet</Link></li>
        <li><Link to="/about">ℹ️ About Us</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
