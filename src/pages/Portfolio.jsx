
import Navbar from '../components/Navbar';
import IntroSection from '../components/IntroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import '../styles/Portfolio.css';

const Portfolio = () => {
 

  return (
    <div className="portfolio-page">
      <Navbar /> {/* Top navigation bar */}

      <main>
        <section id="intro">
          <IntroSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
