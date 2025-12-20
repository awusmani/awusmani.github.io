import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-card frosted-card">
        <h2 className="about-title">About Me</h2>
        <p className="about-intro">
          Hi — I'm Wasay, I am a results-driven Software Engineer with a proven track record of delivering scalable, 
          high-performance solutions in the technology sectors. 
          Currently at FINRA, I design and implement enterprise-grade applications using Scala and Java, 
          ensuring reliability and efficiency in complex systems.
        </p>

        <h3 className="about-sub">Skills & Tools</h3>
        <ul className="about-list">
          <li>Java/Scala, Python, AWS, Amazon Q, Claude</li>
          <li>JavaScript (ES6+), React, Vite</li>
          <li>HTML5, CSS3, Responsive Design</li>
          <li>Git, GitHub, CI / CD basics</li>
        </ul>

        <h3 className="about-sub">Goal</h3>
        <p className="about-text">
          I am passionate about leveraging technology to solve complex problems and drive organizational success. 
          My goal is to continue advancing my expertise in distributed systems and cloud-based architectures while 
          contributing to impactful projects that align with business objectives.
        </p>
      </div>
    </section>
  );
}
