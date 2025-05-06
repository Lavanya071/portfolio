import '../styles/SkillsSection.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaPython
} from 'react-icons/fa';
import { SiExpress, SiMysql, SiTailwindcss } from 'react-icons/si';

const frontendSkills = [
  { name: 'HTML5', icon: <FaHtml5 className="skill-icon" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="skill-icon" /> },
  { name: 'JavaScript', icon: <FaJs className="skill-icon" /> },
  { name: 'React-Js', icon: <FaReact className="skill-icon" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="skill-icon" /> },
];

const backendSkills = [
  { name: 'Node-Js', icon: <FaNodeJs className="skill-icon" /> },
  { name: 'Express-Js', icon: <SiExpress className="skill-icon" /> },
  { name: 'Python', icon: <FaPython className="skill-icon" /> },
];

const databaseSkills = [
  { name: 'MySql', icon: <SiMysql className="skill-icon" /> },
  { name: 'Git', icon: <FaGitAlt className="skill-icon" /> },
];

const SkillsGrid = ({ title, skills }) => (
  <div className="skill-category">
    <h3 className="skill-category-title">{title}</h3>
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div
          className="skill-card"
          key={index}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {skill.icon}
          <span className="skill-label">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-wrapper">
        <SkillsGrid title="Frontend" skills={frontendSkills} />
        <SkillsGrid title="Backend" skills={backendSkills} />
        <SkillsGrid title="Database & Tools" skills={databaseSkills} />
      </div>
    </section>
  );
};

export default SkillsSection;
