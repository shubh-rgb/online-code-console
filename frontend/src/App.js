import React, { useState } from 'react';
import './App.css';

function App() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = async () => {
    const res = await fetch('http://localhost:5000/run', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();
    setOutput(data.output || data.error);
  };

  return (
    <div className="App">
      <h2>Online JavaScript Console</h2>
      <textarea
        rows="10"
        cols="80"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your JavaScript code here..."
      />
      <br />
      <button onClick={runCode}>Run</button>
      <pre>{output}</pre>
    </div>
  );
}

export default App;
