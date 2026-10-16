import React from 'react';

const Skills = () => {
  const skillList = ['React.js', 'JavaScript (ES6+)', 'Vanilla CSS3', 'HTML5', 'Git & GitHub', 'Responsive Design'];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skillList.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;