import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import '../styles/Layout.css'; // Adjust if needed

const Layout = ({ children }) => {
  return (
    <>
        <Navbar />
        <div className="layout-container">
            <Sidebar />
            {/* </aside> */}
            <div className="main-content">
                {children}
        </div>
        </div>
    </>
  );
};

export default Layout;
