import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <section className="about">
      <div className="about-card frosted-card">
        <h2 className="about-title">About Me</h2>
        <p className="about-intro">
          Hi — I'm Wasay, a web developer who loves building clean, accessible,
          and performant user experiences. I enjoy working with modern JavaScript
          frameworks, CSS, and tooling to ship delightful interfaces.
        </p>

        <h3 className="about-sub">Skills & Tools</h3>
        <ul className="about-list">
          <li>JavaScript (ES6+), React, Vite</li>
          <li>HTML5, CSS3, Responsive Design</li>
          <li>Git, GitHub, CI / CD basics</li>
        </ul>

        <h3 className="about-sub">What I do</h3>
        <p className="about-text">
          I build small to medium-sized web apps, focus on component-driven
          design, and aim to make interfaces that are easy to use and maintain.
        </p>
      </div>
    </section>
  );
}
