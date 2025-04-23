const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { VM } = require('vm2');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // To serve index.html

app.post('/run', (req, res) => {
  const code = req.body.code;

  const vm = new VM({
    timeout: 1000,
    sandbox: {}
  });

  try {
    const result = vm.run(code);
    res.json({ output: String(result) });
  } catch (err) {
    res.json({ error: `Error: ${err.message}` });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
