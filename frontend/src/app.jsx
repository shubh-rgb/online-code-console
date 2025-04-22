// App.jsx
import React, { useState } from 'react';
import Editor from "@monaco-editor/react";
import axios from 'axios';

export default function App() {
  const [code, setCode] = useState("// Write your code here");
  const [language, setLanguage] = useState("python");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const runCode = async () => {
    try {
      const res = await axios.post("http://localhost:5000/run", {
        language,
        code,
        input,
      });
      setOutput(res.data.output);
    } catch (err) {
      setOutput(err.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <div className="p-4">
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="python">Python</option>
        <option value="javascript">JavaScript</option>
        <option value="cpp">C++</option>
      </select>
      <Editor height="50vh" language={language} value={code} onChange={setCode} />
      <textarea placeholder="Input" rows="4" onChange={(e) => setInput(e.target.value)} value={input}></textarea>
      <button onClick={runCode}>Run</button>
      <pre className="bg-black text-green-400 p-4">{output}</pre>
    </div>
  );
}
