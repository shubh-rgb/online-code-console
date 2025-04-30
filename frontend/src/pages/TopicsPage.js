import React, { useEffect } from 'react';
import '../styles/TopicsPage.css';

const TopicsPage = () => {
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
    <div className="topics-page">
      {/* Hero Section */}
      <section className="hero fade-in">
        <div className="hero-content">
          <h1>Explore Topics</h1>
          <p>Find your favorite programming topics and master them with hands-on examples and interactive coding exercises.</p>
        </div>
      </section>

      {/* Topics Listing */}
      <section className="topics-section fade-in">
        <h2>Available Topics</h2>
        <ul className="topics-list">
          <li><a href="/javascript-basics.html">JavaScript Basics</a> – Variables, functions, loops, arrays, objects</li>
          <li><a href="/python-loops.html">Python Loops</a> – For loops, while loops, break, continue</li>
          <li><a href="/functions.html">Functions</a> – Writing reusable code blocks in Python and JavaScript</li>
          <li><a href="/example.html">Code Examples</a> – Ready-to-use snippets and simple logic programs</li>
          <li><a href="/java-oops.html">Java OOPs Concepts</a> – Classes, Objects, Inheritance, Polymorphism</li>
          <li><a href="/c-programming.html">C Programming Basics</a> – Variables, Conditions, Loops, Functions</li>
          
        </ul>
      </section>

      {/* Footer */}
      <footer className="fade-in">
        <p>&copy; 2025 Online Code Console. Built with ❤️ for learners.</p>
      </footer>
    </div>
  );
};

export default TopicsPage;
