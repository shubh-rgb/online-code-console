const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { VM } = require('vm2');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');


const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // To serve index.html

app.post('/run', (req, res) => {
  const code = req.body.code;

  if (language === 'javascript') {
    const vm = new VM({
      timeout: 1000,
      sandbox: {}
    });

    try {
      const script = new vm.Script(code);
      const context = {};
      vm.createContext(context); // sandbox context
      const result = script.runInContext(context);
      res.json({ output: String(result) });
    } catch (err) {
      res.json({ error: err.message });
    }
  }

  else if (language === 'python') {
    exec(`python3 -c "${code.replace(/"/g, '\\"')}"`, (err, stdout, stderr) => {
      if (err || stderr) {
        res.json({ error: stderr || err.message });
      } else {
        res.json({ output: stdout });
      }
    });
  } else {
    res.json({ error: 'Unsupported language' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));

// app.listen(PORT, () => {
//   console.log(`🚀 Server running at http://localhost:${PORT}`);
// });