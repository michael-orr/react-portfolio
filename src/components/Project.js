import React from 'react';
import projects from '../Projects';

function Project(){
    return (
        <a
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
      </a>
    );
};

export default Project;