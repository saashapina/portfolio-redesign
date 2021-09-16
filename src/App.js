import "./App.scss";
import { projects, skills } from "./data";

function App() {
  return (
    <div className="App">
      <header>
        <div className="name">SaaSha Pina</div>
        <div className="nav">
          <div>Work</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </header>

      <h1>Hi, I'm SaaSha</h1>
      <h2>Front End Developer and Designer</h2>
      <p>Building digital products, brands, and experience</p>

      <h2 className="section-header">Work</h2>
      <div className="projects">
        {projects.map((project) => (
          <div className="project" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <h2>About Me</h2>
      <p>
        This is all about me Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>

      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill) => (
          <div className="skill">
            {skill.title}
            {skill.description}
          </div>
        ))}
      </div>

      <h2>Contact</h2>
      <p>contact me</p>
    </div>
  );
}

export default App;
