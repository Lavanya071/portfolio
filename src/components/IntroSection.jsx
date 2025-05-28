import '../styles/IntroSection.css';


const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-text">
          <h1 className="intro-title">
            Hi, I’m <span className="highlight">Maila Lavanya</span>
          </h1>
          <p className="intro-subtitle">Full Stack Developer</p>
          <p className="intro-description">
           I design and develop responsive web applications that prioritize user experience, functionality, and performance optimization, ensuring seamless interaction across all devices. </p>

          <div className="intro-links">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="intro-btn">📄 Resume</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="intro-btn">🔗 LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="intro-btn">💻 GitHub</a>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default IntroSection;
