import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';


const HomePage = () => {

  // Scroll Animation (Fade-in)
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
    <div>

      {/* Hero / Intro Section */}
      <section className="hero fade-in">
        <div className="hero-content">
          <h1>Welcome to Knowledge Craft.</h1>
          <p>
            Learn, write, and execute code in real-time — right in your browser. 
            Master languages like <strong>Python, JavaScript, Java, and C</strong> with interactive examples and an instant code editor.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="fade-in how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>💡 Choose a Language</h3>
            <p>Select from Python, JS, Java, or C — perfect for beginners and pros.</p>
          </div>
          <div className="step">
            <h3>🧑‍💻 Write Code Online</h3>
            <p>No setup required. Write and run code instantly in your browser.</p>
          </div>
          <div className="step">
            <h3>📚 Learn by Example</h3>
            <p>Access curated topics with syntax, examples, and real outputs.</p>
          </div>
        </div>  
      </section>

        {/* Call to Action */}
        <section className="fade-in cta-section">
                <h2>Ready to Start Coding?</h2>
                <p>Join thousands of learners — improve your coding skills from anywhere.</p>
                <Link to="/console" className="btn btn-primary">Start Coding</Link>
        </section>

      {/* Topics Section */}
      <section id="topics" className="topics-section fade-in">
        <h2>Topics to Explore</h2>
        <ul className="topics-list">
          <li><Link to="/javascript-basics">JavaScript Basics</Link></li>
          <li><Link to="/python-loops">Python Loops</Link></li>
          <li><Link to="/functions">Functions</Link></li>
          <li><Link to="/examples">Code Examples</Link></li>
          <li><Link to="/java-oops">Java OOPs Concepts</Link></li>
          <li><Link to="/c-programming">C Programming Basics</Link></li>
          <li><Link to="/git-cheat-sheet">🔧 Git Cheat Sheet</Link></li>
        </ul>
      </section>

      

      {/* Footer */}
      <footer className="fade-in">
        <p>&copy; 2025 - Knowledge craft. Built with ❤️ for coders.</p>
      </footer>

    </div>
  );
};

export default HomePage;
