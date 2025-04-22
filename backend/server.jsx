// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());

app.post('/run', async (req, res) => {
  const { code, language, input } = req.body;

  const tempDir = path.join(__dirname, 'temp');
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

  const filename = `temp_${Date.now()}`;
  const filepath = `${tempDir}/${filename}`;
  let command = "";
  
  // Save code to file
  try {
    if (language === "python") {
      fs.writeFileSync(`${filepath}.py`, code);
      fs.writeFileSync(`${filepath}.in`, input);
      command = `docker run --rm -v ${tempDir}:/app python:3.9 bash -c "cd /app && python ${filename}.py < ${filename}.in"`;
    } else if (language === "javascript") {
      fs.writeFileSync(`${filepath}.js`, code);
      fs.writeFileSync(`${filepath}.in`, input);
      command = `docker run --rm -v ${tempDir}:/app node:18 bash -c "cd /app && node ${filename}.js < ${filename}.in"`;
    } else if (language === "cpp") {
      fs.writeFileSync(`${filepath}.cpp`, code);
      fs.writeFileSync(`${filepath}.in`, input);
      command = `docker run --rm -v ${tempDir}:/app gcc bash -c "cd /app && g++ -o ${filename} ${filename}.cpp && ./${filename} < ${filename}.in"`;
    } else {
      return res.status(400).json({ error: "Unsupported language" });
    }

    exec(command, (err, stdout, stderr) => {
      if (err) return res.status(500).json({ error: stderr });
      return res.json({ output: stdout });
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
