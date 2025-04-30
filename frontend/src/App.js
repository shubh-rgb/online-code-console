// src/App.js
import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ConsolePage from './pages/ConsolePage';
import JavaScriptBasicsPage from './pages/JavaScriptBasicsPage';
import AboutPage from './pages/AboutPage';
import TopicsPage from './pages/TopicsPage';
import ExamplesPage from './pages/ExamplesPage';
import CProgrammingPage from './pages/CProgrammingPage';
import Functions from './pages/Functions';
import JavaOOPs from './pages/JavaOOPs';
import PythonLoops from './pages/PythonLoops';
import GitCheatSheet from './pages/GitCheatSheet';

// Import other pages when needed (ConsolePage, AboutPage, etc.)

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/console" element={<ConsolePage />} />
          <Route path="/javascript-basics" element={<JavaScriptBasicsPage />} /> {/* ✅ new route */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/examples" element={<ExamplesPage />} />
          <Route path="/c-programming" element={<CProgrammingPage />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/java-oops" element={<JavaOOPs />} />
          <Route path="/python-loops" element={<PythonLoops />} />
          <Route path="/git-cheat-sheet" element={<GitCheatSheet />} />
          {/* Add other routes here later */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;