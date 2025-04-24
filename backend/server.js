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
  const { code, language } = req.body;
  

  if (language === 'javascript') {
    let output = '';
    let errorOutput = '';

    const vm = new VM({
      timeout: 1000,
      sandbox: {
        console: {
          log: (...args) => {
            output += args.join(' ') + '\n';
          },
          error: (...args) => {
            errorOutput += args.join(' ') + '\n';
          },
      },
    }
  });

  try {
    vm.run(code);
    res.json({
      success: true,
      output: output.trim() || 'undefined',
      error: null
    });
  } catch (err) {
    res.json({
      success: false,
      output: null,
      error: err.stack
    });
    }
  }

  else if (language === 'python') {
    exec(`python3 -c "${code.replace(/"/g, '\\"')}"`, (err, stdout, stderr) => {
      if (err || stderr) {
        res.json({
          success: false,
          output: stdout.trim() || null,
          error: stderr.trim() || err.message
        });
      } else {
        res.json({
          success: true,
          output: stdout.trim(),
          error: null
        });
      }
    });
  } 



  else if (language === 'java') {
    // const fileName = 'Main.java';
    // const className = 'Main';

    const classNameMatch = code.match(/public\s+class\s+(\w+)/);

    if (!classNameMatch) {
      return res.json({
        success: false,
        output: null,
        error: 'Could not find public class declaration in the code.'
      });
    }

    // Extract class name
    const className = classNameMatch[1];
    const fileName = `${className}.java`;

  // Write the Java code to a file
  fs.writeFileSync(fileName, code);

  // Compile the Java code
  exec(`javac ${fileName}`, (err, stdout, stderr) => {
    if (err || stderr) {
      return res.json({
        success: false,
        output: null,
        error: stderr.trim() || err.message
      });
    }

    // Run the compiled Java class
    exec(`java ${className}`, (err, stdout, stderr) => {
      const response = {
        success: !err && !stderr,
        output: stdout?.trim() || null,
        error: stderr?.trim() || (err?.message || null)
      };

      // Safely clean up compiled and source files
      if (fs.existsSync(fileName)) fs.unlinkSync(fileName);
      if (fs.existsSync(`${className}.class`)) fs.unlinkSync(`${className}.class`);

      return res.json(response);
    });
  });
  }
  
  else if (language === 'c') {
    const fileName = 'temp.c';
  
    // Write the C code to a temporary file
    fs.writeFileSync(fileName, code);
  
    // Compile C code using gcc
    exec(`gcc ${fileName} -o temp`, (err, stdout, stderr) => {
      if (err || stderr) {
        res.json({
          success: false,
          output: null,
          error: stderr.trim() || err.message
        });
      } else {
        // Run the compiled C program
        exec(`./temp`, (err, stdout, stderr) => {
          if (err || stderr) {
            res.json({
              success: false,
              output: stdout.trim() || null,
              error: stderr.trim() || err.message
            });
          } else {
            res.json({
              success: true,
              output: stdout.trim(),
              error: null
            });
          }
  
          // Cleanup the temporary files after execution
          fs.unlinkSync(fileName);  // Delete the C file
          fs.unlinkSync('temp');  // Delete the compiled executable
        });
      }
    });
  }
  
  
  else {
    res.json({ error: 'Unsupported language' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));