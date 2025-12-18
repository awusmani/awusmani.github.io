import React from 'react';
import '../styles/experience.css';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'FINRA',
      position: 'Software Engineer',
      years: '2022 - Present',
      description: [
        'Java/Scala backend development and testing',
        'Api development using Spring Boot',
        'AWS microservices',
      ],
    },
    {
      id: 2,
      company: 'Softek Enterprises',
      position: 'Software Engineer',
      years: '2021 - 2022',
      description: [
        'Python backend development',
        'Lambda functions for data processing tasks',
      ],
    },
    {
      id: 3,
      company: 'Softek Enterprises',
      position: 'Junior Test Engineer',
      years: '2019 - 2021',
      description: [
        'Front end testing in Cucumber',
        'Selenium and JUnit frameworks',
      ],
    },
    {
      id: 4,
      company: 'University of Maryland, College Park',
      position: 'BS in Computer Science',
      years: '2016 - 2018',
      description: [],
    },
  ];

  return (
    <div className="experience-section">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content frosted-card">
              <div className="timeline-header">
                <h3 className="company-name">{exp.company}</h3>
                <span className="timeline-years">{exp.years}</span>
              </div>
              <p className="position">{exp.position}</p>
              {exp.description.length > 0 && (
                <ul className="description-list">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
