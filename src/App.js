import "./App.scss";
import { projects, skillIcons } from "./data";
import ReactTooltip from "react-tooltip";
import MyPhoto from "./assets/my-photo.png";
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

      {/* Skills */}
      <div className="section">
        <h2 className="section-header">Skills</h2>
        <div className="skills">
          <ReactTooltip place="bottom" effect="solid" />
          {skillIcons.map((icon) => (
            <div className="skill-icon" key={icon.title}>
              <img data-tip={icon.title} src={icon.icon} alt={icon.title} />
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="about section-header">About Me</h2>
        <div className="about-me">
          <img src={MyPhoto} alt="profile" />
          <p className="about-me-text">
            I'm a front-end web developer with a love for design and building
            memorable user experiences. I create successful websites that are
            fast, beautiful, easy to use, accessible and built with best
            practices. I have done work in front-end/back-end web, React Native
            mobile app creation, and wireframe design.
            <br />
            <br />
            Outside of coding I enjoy sitting ocean side, hiking to the summit,
            xtreme martial arts, painting, and going on adventures with my
            daugther and husband.
          </p>
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
