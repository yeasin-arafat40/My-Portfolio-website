import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div style={{ color: 'var(--text-muted)', maxWidth: '800px', fontSize: '1.05rem' }}>
        <p style={{ marginBottom: '1rem' }}>
          Hello! My name is Yeasin Arafat, and I love creating dynamic and responsive frontend web applications. My journey with web development started with HTML and CSS, and evolved into specializing in the React ecosystem.
        </p>
        <p>
          I focus on writing clean code, building intuitive component architectures, and delivering fast user experiences with neon-inspired sleek animations.
        </p>
      </div>
    </section>
  );
};

export default About;