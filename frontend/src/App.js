import React, { useState } from 'react';
import './App.css';
// import axios from 'axios';

const CodeConsole = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript'); // Default language
  const [output, setOutput] = useState('');

  const runCode = async () => {
    try {
      const res = await axios.post('http://localhost:5000/run', {
        code,
        language,
      });
      setOutput(res.data.output || res.data.error);
    } catch (err) {
      setOutput('Server Error');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🧪 Online Code Console</h2>

      <label>
        <strong>Select Language:</strong>{' '}
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
      </label>

      <textarea
        rows="10"
        cols="80"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
        style={{ display: 'block', marginTop: 10 }}
      />

      <button onClick={runCode} style={{ marginTop: 10 }}>
        ▶ Run
      </button>

      <pre style={{ backgroundColor: '#f4f4f4', padding: 10, marginTop: 10 }}>
        <strong>Output:</strong>{'\n'}{output}
      </pre>
    </div>
  );
};

export default CodeConsole;