import "./App.scss";
import { projects, skills } from "./data";

function App() {
  return (
    <div className="App">
      <header className="header-nav">
        <div className="name">SaaSha Pina</div>
        <div className="nav">
          <div className="nav-item">Work</div>
          <div className="nav-item">About</div>
          <div className="nav-item">Contact</div>
        </div>
      </header>

      <div className="section">
        <h1 className="sub-header animatedFadeIn">Hi, I'm SaaSha 👋🏽</h1>
        <h2 className="header animatedFadeIn">Front End Developer</h2>
        <h2 className="header animatedFadeIn fadeInDelay1">& Designer</h2>
        <p className="header-description animatedFadeIn fadeInDelay2">
          Building digital products, brands, and experiences.
        </p>
        <button className="header-button animatedFadeIn">
          Connect with me
        </button>
      </div>

      <div className="section">
        <h2 className="section-header">Work</h2>
        <div className="projects">
          {projects.map((project) => (
            <div className="project" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-header">About Me</h2>
        <p>
          This is all about me Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="section">
        <h2 className="section-header">Skills</h2>
        <div className="skills">
          {skills.map((skill) => (
            <div className="skill" key={skill.title}>
              {skill.title}
              {skill.description}
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-header">Contact</h2>
        <p>contact me</p>
      </div>
    </div>
  );
}

export default App;
