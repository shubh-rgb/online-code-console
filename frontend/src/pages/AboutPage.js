import React, { useEffect } from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
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
    <div className="about-page">
      {/* Hero Header */}
      <section className="hero fade-in">
        <div className="hero-content">
          <h1>About Knowledge Craft</h1>
          <p>Empowering learners around the world to code smarter, faster, and better — right from their browser.</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-section fade-in">
        <h2>Who We Are</h2>
        <p>
          Online Code Console is a platform designed for anyone passionate about programming. Whether you are a beginner writing your first "Hello World!" or a developer preparing for coding interviews, our platform provides you a fast, distraction-free space to practice coding online.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to make coding accessible to everyone — no complicated setups, no expensive software — just open your browser and start coding immediately.
        </p>

        <h2>What Makes Us Unique</h2>
        <ul className="unique-points">
          <li>🚀 Instant online code execution</li>
          <li>🌐 Support for Python, JavaScript, Java, and C</li>
          <li>📚 Curated topics and real-world code examples</li>
          <li>💬 A community-driven learning experience (Coming Soon)</li>
          <li>🎯 Minimalistic, fast, and mobile-friendly</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="fade-in">
        <p>&copy; 2025 Online Code Console. Built with ❤️ for learners and developers.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
