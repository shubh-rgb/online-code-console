import React, { useEffect } from 'react';
import '../styles/ExamplesPage.css';

const ExamplesPage = () => {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    faders.forEach(fader => appearOnScroll.observe(fader));
  }, []);

  return (
    <div className="examples-page">
      {/* Hero Header */}
      <section className="hero fade-in">
        <div className="hero-content">
          <h1>Code Examples</h1>
          <p>Explore simple and powerful code examples for Python, JavaScript, Java, and C. Practice and learn from real snippets!</p>
        </div>
      </section>

      {/* Code Examples */}
      <section className="examples-section fade-in">
        <h2>Popular Examples</h2>

        <div className="example">
          <h3>🐍 Python: Hello World</h3>
          <pre><code>print("Hello, World!")</code></pre>
        </div>

        <div className="example">
          <h3>🌐 JavaScript: Add Two Numbers</h3>
          <pre><code>{`let a = 5, b = 10;\nconsole.log("Sum =", a + b);`}</code></pre>
        </div>

        <div className="example">
          <h3>☕ Java: Check Even or Odd</h3>
          <pre><code>{`public class Main {
  public static void main(String[] args) {
    int num = 7;
    if(num % 2 == 0)
      System.out.println("Even");
    else
      System.out.println("Odd");
  }
}`}</code></pre>
        </div>

        <div className="example">
          <h3>🔵 C: Find the Largest Number</h3>
          <pre><code>{`#include <stdio.h>
int main() {
  int a = 10, b = 20;
  if (a > b)
    printf("Largest is %d", a);
  else
    printf("Largest is %d", b);
  return 0;
}`}</code></pre>
        </div>
      </section>

      <footer className="fade-in">
        <p>&copy; 2025 Online Code Console. Built with ❤️ for learners.</p>
      </footer>
    </div>
  );
};

export default ExamplesPage;
