// src/components/Resume.jsx
import React from 'react';

const Resume = () => {
  const proficiencies = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'HTML5',
    'CSS3',
    'Git',
  ];

  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="public/images/Db Resume.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;