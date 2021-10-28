import "./App.scss";
import { projects, skills } from "./data";
import { ReactComponent as GithubLogo } from "./assets/git.svg";
import { ReactComponent as GotoLogo } from "./assets/goto.svg";

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

      {/* Hero */}
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

      {/* Work */}
      <div className="section">
        <div className="projects">
          {projects.map((project) => (
            <div className="project">
              <div className="project-details animatedFadeIn fadeInDelay2">
                <div className="project-category">Latest work</div>
                <h2 className="project-title section-header">
                  {project.title}
                </h2>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <div className="project-tag">{tag}</div>
                  ))}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  {project.links.map((link) => {
                    if (link.github) {
                      return (
                        <div>
                          <a
                            href={link.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <GithubLogo />
                          </a>
                          <a href={link.live} target="_blank" rel="noreferrer">
                            <GotoLogo />
                          </a>
                        </div>
                      );
                    } else {
                      return (
                        <a href={link.live} target="_blank" rel="noreferrer">
                          <GotoLogo />
                        </a>
                      );
                    }
                  })}
                </div>
              </div>
              <a
                className="project-image-link"
                href={project.links[0].live}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="project-image animatedFadeIn fadeInDelay3"
                  src={project.image}
                  alt={project.title}
                />
              </a>
            </div>
          ))}
        </div>
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
        <h2 className="section-header">About Me</h2>
        {/* <img src={}/> */}
        <p>
          My name is SaaSha. I'm a full-stack web developer with a love for
          design and building memorable user experiences. Outside of coding I
          enjoy sitting ocean side, hiking to the summit, xtreme martial arts,
          painting, and spending quality time with my family.
        </p>
      </div>

      <div className="section">
        <h2 className="section-header">Contact</h2>
        <p>contact me</p>
      </div>
    </div>
  );
}

export default App;
