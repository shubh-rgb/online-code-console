import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ConsolePage.css';


const ConsolePage = () => {
  const [language, setLanguage] = useState('python');
  const [code, setCode] = useState('print("Hello World")');
  const [output, setOutput] = useState('');
  const [showModal, setShowModal] = useState(false);

  const BASE_URL = process.env.REACT_APP_BACKEND_URL || window.location.origin;

  const runCode = async () => {
    setOutput('Running...');

    try {
        const res = await fetch(`${BASE_URL}/run`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language })
      });

      const data = await res.json();
      setOutput(data.output || data.error || 'No output');
    } catch (err) {
      setOutput('Error: ' + err.message);
    }
  };

  const clearConsole = () => {
    setOutput('');
  };

  const downloadOutput = () => {
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'output.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="console-page">
      {/* Login Modal */}
      {showModal && (
        <div className="modal">
          <form className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Login</h2>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </div>
      )}

      {/* Console UI */}
      <main className="console-wrapper">
        <div className="top-bar">
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="c">C</option>
          </select>
          <button onClick={runCode}>Run</button>
          <button onClick={clearConsole}>Clear</button>
          <button onClick={downloadOutput}>Download</button>
        </div>

        <div className="console-area">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Write your code here..."
          />
          <pre>{output || 'Output will appear here...'}</pre>
        </div>
      </main>

      {/* Topics Section */}
      <section className="topics-section">
        <h2>Topics to Explore</h2>
        <ul>
          <li><Link to="/javascript-basics">JavaScript Basics</Link></li>
          <li><Link to="/python-loops">Python Loops</Link></li>
          <li><Link to="/functions">Functions</Link></li>
          <li><Link to="/examples">Examples</Link></li>
          <li><Link to="/git-cheat-sheet">🔧 Git Cheat Sheet</Link></li>
        </ul>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Online Code Console. Built with ❤️ for learners.</p>
      </footer>
    </div>
  );
};

export default ConsolePage;
