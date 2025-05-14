import "./App.scss";
import { React, useRef, useEffect } from "react";
import { projects, skillIcons } from "./data";
import { Tooltip } from "react-tooltip";
import MyPhoto from "./assets/my-photo.png";
import { ReactComponent as GithubLogo } from "./assets/git.svg";
import { ReactComponent as GotoLogo } from "./assets/goto.svg";
import { ReactComponent as MailIcon } from "./assets/mail.svg";
import { ReactComponent as LinkedInIcon } from "./assets/linkedin.svg";
import smoothscroll from "smoothscroll-polyfill";

function App() {
  const useSmoothScrollTo = (id) => {
    const ref = useRef(null);
    useEffect(() => {
      const listener = (e) => {
        if (ref.current && window.location.hash === id) {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }
      };
      window.addEventListener("hashchange", listener, true);
      return () => {
        window.removeEventListener("hashchange", listener);
      };
    }, [id]);
    return {
      "data-anchor-id": id,
      ref,
    };
  };

  smoothscroll.polyfill();

  return (
    <div className="App">
      <div className="container">
        <header className="header-nav">
          <div className="name">SaaSha Pina</div>
          <div className="nav">
            <a href="#work">
              <div className="nav-item">Work</div>
            </a>
            <a href="#about">
              <div className="nav-item">About</div>
            </a>
            <a
              href="https://drive.google.com/file/d/1kSexBf-vN1UJsVtmYjnLyzJAyKeUGr8_/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <div className="nav-item">Resume</div>
            </a>
          </div>
        </header>

        {/* Hero */}
        <div className="section">
          <h1 className="sub-header animatedFadeIn">
            Hi, I'm SaaSha <span className="wave">👋🏽</span>
          </h1>
          <div>
            <h2 className="header animatedFadeIn">Front End Developer</h2>
          </div>
          <mark>
            <h2 className="header animatedFadeIn fadeInDelay1">& Designer</h2>
            <svg
              className="highlighter-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 60"
              preserveAspectRatio="none"
              stroke="#e7f6f9"
            >
              <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
            </svg>
            <svg
              className="highlighter-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 60"
              preserveAspectRatio="none"
              stroke="#e7f6f9"
            >
              <path d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571" />
            </svg>
          </mark>
          <p className="header-description animatedFadeIn fadeInDelay2">
            Building digital products, brands, and experiences.
          </p>
          <button
            className="header-button animatedFadeIn hvr-sweep-to-right"
            onClick={(e) => {
              window.location = "mailto:saasha.pina@gmail.com";
              e.preventDefault();
            }}
            type="button"
          >
            Connect with me
          </button>
        </div>

        {/* Experience */}
        <div className="section">
          <h2 className="section-header">Recent Experience</h2>
          <div className="experience">
            <div className="experience-item animatedFadeIn">
              <div className="experience-header">
                <h3 className="experience-title">
                  Front End Developer Consultant
                </h3>
                <div className="experience-company">
                  Sparkbox Agency (Forge LLC)
                </div>
                <div className="experience-duration">Jan 2022 - Present</div>
              </div>
              <ul className="experience-details">
                <li>
                  <strong>Adobe - Design System Integration</strong> - Lead the
                  Adobe Spectrum Design System integration and implmentation on
                  Adobe.com
                </li>
                <li>
                  <strong>GAP - Product Page Performance & Redesign</strong> -
                  Redesigned and improved performance of GAP product page across
                  all GAP brands using React and Redux. Led tech talks and
                  demonstrations
                </li>
                <li>
                  <strong>Goodyear Tires</strong> - Developed React Native
                  mobile app for tire maintenance detection
                </li>
                <li>
                  <strong>Goodyear Corporate</strong> - Built and redesigned
                  corporate website using AEM CMS
                </li>
                <li>
                  <strong>University of Georgia</strong> - Rebuilt website in
                  WordPress, mentored apprentice developers
                </li>
              </ul>
            </div>

            <div className="experience-item animatedFadeIn fadeInDelay1">
              <div className="experience-header">
                <h3 className="experience-title">React Front End Developer</h3>
                <div className="experience-company">
                  Aura (Aura LLC formerly iSubscribed)
                </div>
                <div className="experience-duration">Oct 2018 - Oct 2020</div>
              </div>
              <ul className="experience-details">
                <li>
                  Developed 900+ Zeplin design mockups & redesigned three brand
                  websites: Identity Guard, Intrusta, & Identity Defense
                </li>
                <li>
                  Managed data and solved complex problems using Redux &
                  Contentful
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Work */}
        <div {...useSmoothScrollTo("#work")} className="section">
          <div className="projects">
            {projects.map((project) => (
              <div className="project" key={project.title}>
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
                      if (link.github && link.live) {
                        return (
                          <div>
                            <a
                              href={link.github}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <GithubLogo />
                            </a>
                            <a
                              href={link.live}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <GotoLogo />
                            </a>
                          </div>
                        );
                      }
                      if (link.github) {
                        return (
                          <a
                            href={link.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <GithubLogo />
                          </a>
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
                  className="project-image-link hvr-bob"
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
            <Tooltip place="bottom" effect="solid" />
            {skillIcons.map((icon) => (
              <div className="skill-icon hvr-grow-rotate" key={icon.title}>
                <img data-tip={icon.title} src={icon.icon} alt={icon.title} />
              </div>
            ))}
            <div className="skill-details">
              <li>
                ⚡ Developing highly interactive User Interfaces for your web &
                mobile applications
              </li>
              <li>
                ⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks
              </li>
              <li>
                ⚡ Integration of third party services such as Firebase / AWS /
                Stripe
              </li>
            </div>
          </div>
        </div>

        <div className="section" {...useSmoothScrollTo("#about")}>
          <h2 className="about section-header">About Me</h2>
          <div className="about-me">
            <img src={MyPhoto} alt="profile" />
            <p className="about-me-text">
              I'm a front-end web developer with a love for design and building
              memorable user experiences. I create websites that are fast,
              beautiful, easy to use, ADA compliant, accessible and built with
              best practices. I have done work in front-end/back-end web,
              Webflow, React Native mobile app creation, and Figma mockup
              design.
              <br />
              <br />
              Outside of coding I enjoy sitting ocean side, hiking to the
              summit, xtreme martial arts, painting, and going on adventures
              with my daughters, husband, and my big pup King.
            </p>
          </div>
        </div>
      </div>
      <div className="section contact">
        <h2 className="contact-header header">Get In Touch</h2>
        <button
          className="header-button hvr-sweep-to-right"
          onClick={(e) => {
            window.location = "mailto:saasha.pina@gmail.com";
            e.preventDefault();
          }}
          type="button"
        >
          Connect With Me
        </button>
      </div>
      <div className="footer">
        <div className="footer-copyright">
          Crafted With 🤍 © {new Date().getFullYear()} SaaSha Pina
        </div>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/saashapina/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:saasha.pina@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MailIcon />
          </a>
          <a
            href="https://github.com/saashapina"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
