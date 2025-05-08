import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import '../styles/Layout.css'; // Adjust if needed

const Layout = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="layout-container">
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>
      <Sidebar visible={sidebarVisible} />
      <div className={`main-content ${sidebarVisible ? 'shift' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
