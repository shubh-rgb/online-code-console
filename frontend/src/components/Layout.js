import React from 'react';
import Sidebar from './Sidebar';
import '../styles/App.css'; // Adjust if needed

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Sidebar />
      {/* </aside> */}
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
