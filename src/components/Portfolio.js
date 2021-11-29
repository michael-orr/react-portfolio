import React from "react";
import projects from "../Projects";
import Project from "./Project";

function Portfolio() {
  return (
    <main>
      <section className="row">
        <h2 id="about-me">About Me</h2>
        <article>
          <p>
            Michael Orr is a full-stack developer and sales manager in San
            Diego, CA. His 25 years of experience in sales, sales management,
            property and casualty insurance, construction risk management,
            photography and web development make him an ideal candidate to
            develop and manage a specialty insurance program.
          </p>
          <p>
            Michael is a father of two boys, and spends most of his free time
            surfing and camping in the American Southwest. Please review the
            below samples of his work for an idea of what he's all about.
          </p>
        </article>
      </section>
      <section className="row">
        <h2 id="my-work">My Work</h2>
        <div className="portfolio-display">
          <a
            href="https://zacklai21.github.io/real-estate-research/"
            target="blank"
            className="portfolio-item"
            id="portfolio-item-1"
          >
            <div className="overlay"></div>
            <div className="project">
              <h3 className="project-title">Find A City</h3>
              <p className="project-description">A research tool for homebuyers.</p>
            </div>
          </a>
          <a
            href="https://michael-orr.github.io/code-quiz/"
            target="blank"
            className="portfolio-item"
            id="portfolio-item-2"
          >
            <div className="project">
              <h3 className="project-title">Code Quiz</h3>
              <p className="project-description">Test your Javascript knowledge.</p>
            </div>
          </a>
          {/* <a
            href="https://michael-orr.github.io/work-day-scheduler/"
            target="blank"
            className="portfolio-item"
            id="portfolio-item-3"
          >
            <div className="project">
              <h3 className="project-title">Work Day Scheduler</h3>
              <p><a href="https://github.com" target="blank">Github link</a> | <a href="https://github.com" target="blank">Deployed App</a></p>
              <p className="project-description">
                Your day at a glance. Stay on task!
              </p>
            </div>
          </a> */}
          <Project project={projects}/>
          <a href="#about-me" className="portfolio-item" id="portfolio-item-4">
            <div className="project">
              <h3 className="project-title">Project Four</h3>
              <p className="project-description">Coming soon!</p>
            </div>
          </a>
          <a href="#about-me" className="portfolio-item" id="portfolio-item-5">
            <div className="project">
              <h3 className="project-title">Project Five</h3>
              <p className="project-description">Coming soon!</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
