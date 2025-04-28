import React from 'react';
import '../styles/CProgrammingPage.css';

const CProgrammingPage = () => {
  return (
    <div className="c-programming-page">
      <h1>C Programming Basics</h1>

      <p>
        C is a general-purpose, procedural programming language that provides low-level access to memory and gives full control over system resources.
      </p>

      <h2>Key Topics in C:</h2>
      <ul>
        <li><b>Variables and Data Types</b>: int, float, char, etc.</li>
        <li><b>Control Structures</b>: if-else, switch, loops (for, while, do-while)</li>
        <li><b>Functions</b>: Break the program into smaller modules.</li>
        <li><b>Pointers</b>: Variables that store memory addresses.</li>
        <li><b>Arrays and Strings</b>: Manage collections of data.</li>
      </ul>

      <h2>Example:</h2>
      <pre>
{`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`}
      </pre>

      <p><i>Output: Hello, World!</i></p>
    </div>
  );
};

export default CProgrammingPage;
