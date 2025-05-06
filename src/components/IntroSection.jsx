import '../styles/IntroSection.css';
import profileImg from '../assets/fairoz.jpeg';

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-text">
          <h1 className="intro-title">
            Hi, I’m <span className="highlight">Shaik Fairoz</span>
          </h1>
          <p className="intro-subtitle">Full Stack Developer</p>
          <p className="intro-description">
            I develop sophisticated, responsive web applications with a strong emphasis on user experience, functionality, and performance optimization.
          </p>

          <div className="intro-links">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="intro-btn">📄 Resume</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="intro-btn">🔗 LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="intro-btn">💻 GitHub</a>
          </div>
        </div>

        <div className="intro-image">
          <div className="image-wrapper">
            <img src={profileImg} alt="Shaik Fairoz" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
