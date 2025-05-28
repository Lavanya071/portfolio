import '../styles/ProjectsSection.css';

const projects = {
  html: [
    {
      title: 'A Simple HTML Project',
      description: 'Developed a responsive Netflix-inspired web application using HTML, CSS, and JavaScript, replicating core UI components and layout Implemented interactive navigation and responsive design to ensure seamless user experience across devices. Demonstrated proficiency in front-end development and UI/UX best practices through this project.',
      link: 'https://netflixbyme.ccbp.tech/',
      image: 'https://www.citypng.com/public/uploads/preview/round-netflix-logo-701751694792607bemlfazrrl.png'
    }
  ],
  css: [
    {
      title: 'A CSS Project',
      description: 'CSS Animation Showcase is a front-end project that demonstrates various animations using only CSS. It includes hover effects, transitions, and keyframe animations to create smooth and interactive UI elements. This project helped me practice modern CSS techniques without using any JavaScript.',
      link: 'https://travelsandtours.ccbp.tech/',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgVpYI7j5nrddUIFXooY7YEMDB0PAylI96gA&s'
    },
  
    {
      title: 'Portfolio with CSS',
      description: 'Personal Portfolio Website is a responsive web page built using HTML and CSS. It showcases my skills, projects, and contact information in a clean and organized layout. The design uses custom styling, CSS animations, and a consistent theme to create a professional and visually appealing personal brand.',
      link: 'https://portfoliobyme.ccbp.tech/',
      image: 'https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2023/03/image-49.png'
    }
  ],
  htmlCssJs: [
    {
      title: 'Responsive Cake Shop Website',
      description: 'Cake Order Website is a responsive web application developed using HTML, CSS, and JavaScript. It allows users to explore different cake varieties, view details like images and prices, and place orders through an interactive form. JavaScript is used to handle form validation, show dynamic price updates, and enhance user interactions. This project helped me practice DOM manipulation and create a smooth, real-world user experience using front-end technologies.',
      link: 'https://cakeshopdesign.ccbp.tech/',
      image: 'https://colorlib.com/wp-content/uploads/sites/2/cakes-colorlib-template.jpg'
    },
  
    {
      title: 'TO-DO LIst App',
      description: 'The To-Do List App is a basic yet functional task management tool built using HTML, CSS, and JavaScript. It allows users to add, delete, and mark tasks as completed. The layout is clean and responsive, offering a smooth user experience on both desktop and mobile devices. JavaScript is used to handle task interactions dynamically without page reloads. This project helped me understand DOM manipulation, event handling, and local storage for saving tasks even after refreshing the page.',
      link: 'https://todolistbyme.ccbp.tech/',
      image: 'https://i.pinimg.com/originals/8e/f1/31/8ef1310037ddb9099d1b5a1c8eb4710d.png'
    }
  ],
  react: [
    {
      title: 'Portfolio Website',
      description: 'This is a personal portfolio website designed to showcase my professional profile, projects, technical skills, and contact information in a visually appealing and responsive layout. It serves as an online resume and creative platform to present my work to potential employers, clients, or collaborators.',
      link: 'https://portfolio-webstite-jade.vercel.app/',
      image: 'https://s3-alpha.figma.com/hub/file/4209109661/895d1753-993d-4c76-8cbd-a9349edadac8-cover.png'
    },
    {
      title: 'Stock-Trend-Analyzer',
      description: 'The Stock Trend Analyzer is a data-driven application designed to analyze historical stock market data to identify and visualize price trends over time. It leverages technical indicators such as moving averages, RSI (Relative Strength Index), and MACD (Moving Average Convergence Divergence) to detect upward or downward trends in stock prices. The tool helps users make informed investment decisions by providing graphical insights and trend predictions. This project aims to simplify stock market analysis for both beginners and experienced traders through an intuitive and user-friendly interface.',
      link: 'https://stock-market-trend-analyzer.vercel.app/#/login',
      image: 'https://static.vecteezy.com/system/resources/previews/026/266/565/original/successful-stock-market-statistical-information-and-trends-with-up-arrows-futuristic-financial-trading-chart-economic-information-growth-background-vector.jpg'
    }
  ],
  Python: [
    {
      title: 'A Brain Tumor Detection Project',
      description: 'This is a machine learning-based application that helps detect brain tumors from MRI images. The model is trained using deep learning techniques and predicts whether a tumor is present based on the uploaded image. The app uses a user-friendly interface built with Python (Tkinter or Streamlit), allowing users to upload an MRI scan and receive instant prediction results. This project demonstrates the practical application of AI in the medical field, aiming to assist with early tumor detection and awareness.',
      link: 'https://github.com/Fairoz-source/Brain-Tumor-Detection',
      image: 'https://tudip.com/wp-content/uploads/2021/09/Python.jpg'
  
    },
    {
      title: 'IPL Probability Predictor',
      description: 'This is a machine learning-based application that predicts the winning probability of IPL teams during live matches. The model is trained on historical IPL data using algorithms like Logistic Regression and Random Forest. Users can input match details (e.g., runs, overs, wickets, target) through a Streamlit interface to get real-time predictions. This project showcases the use of AI in sports analytics for improving fan engagement and match insights.',
      link: 'https://github.com/Lavanya071/tutorial.git',
      image: 'https://upload.wikimedia.org/wikipedia/en/8/84/Indian_Premier_League_Official_Logo.svg'
      
    }
  ],
};

const ProjectCategory = ({ title, items }) => (
  <>
    <h3 className="projects-subtitle">{title}</h3>
    <div className="projects-grid">
      {items.map((project, idx) => (
        <div className="project-card" key={idx}>
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-content">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">🔗 View Live</a>
          </div>
        </div>
      ))}
    </div>
  </>
);

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <ProjectCategory title="💻 HTML Projects" items={projects.html} />
      <ProjectCategory title="🎨 CSS Projects" items={projects.css} />
      
      <ProjectCategory title="🧠 HTML + CSS + JavaScript Projects" items={projects.htmlCssJs} />
      
      <ProjectCategory title="⚛️ React-JS Projects" items={projects.react} />
      <ProjectCategory title="🐍 Python Projects" items={projects.Python} />

    </section>
  );
};

export default ProjectsSection;
