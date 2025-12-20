import '../styles/skills.css';

export default function Skills() {
  const skills = [
    { name: 'Java', logo: '/logos/java.png' },
    { name: 'JavaScript', logo: '/logos/java-script.png' },
    { name: 'React', logo: '/logos/react.png' },
    { name: 'CSS3', logo: '/logos/css-3.png' },
    { name: 'HTML', logo: '/logos/html.png' },
    { name: 'Python', logo: '/logos/python.png' },
    { name: 'AWS', logo: '/logos/social.png' },
    { name: 'AI', logo: '/logos/ai.png' },
  ];

  return (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card frosted-card">
          <img src={skill.logo} alt={skill.name} className="skill-logo" />
          <p className="skill-name">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
