import React from 'react';
import '../styles/experience.css';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'Tech Company Inc.',
      position: 'Senior Developer',
      years: '2022 - Present',
      description: 'Led development of core platform features and mentored junior developers.',
    },
    {
      id: 2,
      company: 'StartUp Labs',
      position: 'Full Stack Developer',
      years: '2020 - 2022',
      description: 'Built and maintained full-stack web applications using React and Node.js.',
    },
    {
      id: 3,
      company: 'Design Studio Pro',
      position: 'Junior Web Developer',
      years: '2019 - 2020',
      description: 'Developed responsive websites and collaborated with design team.',
    },
    {
      id: 4,
      company: 'Freelance',
      position: 'Web Developer',
      years: '2018 - 2019',
      description: 'Created custom websites and web applications for various clients.',
    },
  ];

  return (
    <div className="experience-section">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3 className="company-name">{exp.company}</h3>
                <span className="timeline-years">{exp.years}</span>
              </div>
              <p className="position">{exp.position}</p>
              <p className="description">{exp.description}</p>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
