import React from 'react';

function Portfolio(){
    return (
        <main>
        <section class="row">
            <h2 id="about-me">About Me</h2>
            <article>
                <p>Michael Orr is a full-stack developer and sales manager in San Diego, CA.  His 25 years of experience in sales, sales management, property and casualty insurance, construction risk management, photography and web development 
                    make him an ideal candidate to develop and manage a specialty insurance program.
                </p>
                <p>
                    Michael is a father of two boys, and spends most of his free time surfing and camping in the American Southwest.  Please review the below samples of his work for an idea of what he's all about.
                </p>
            </article>
        </section>
        <section class="row">
            <h2 id="my-work">My Work</h2>
            <div class="portfolio-display">
                <a href="https://zacklai21.github.io/real-estate-research/" target="blank" class="portfolio-item" id="portfolio-item-1">
                  <div class="overlay"></div>
                  <div class="project">
                    <h3 class="project-title">Find A City</h3>
                    <p class="project-description">A research tool for homebuyers.</p>
                  </div>
                </a>
                <a href="https://michael-orr.github.io/code-quiz/" target="blank" class="portfolio-item" id="portfolio-item-2">
                  <div class="project">
                    <h3 class="project-title">Code Quiz</h3>
                    <p class="project-description">Test your Javascript knowledge.</p>
                  </div>
                </a>
                <a href="https://michael-orr.github.io/work-day-scheduler/" target="blank" class="portfolio-item" id="portfolio-item-3">
                  <div class="project">
                    <h3 class="project-title">Work Day Scheduler</h3>
                    <p class="project-description">Your day at a glance. Stay on task! </p>
                  </div>
                </a>
                <a href="#about-me" class="portfolio-item" id="portfolio-item-4">
                    <div class="project">
                      <h3 class="project-title">Project Four</h3>
                      <p class="project-description">Coming soon!</p>
                    </div>
                </a>
                <a href="#about-me" class="portfolio-item" id="portfolio-item-5">
                    <div class="project">
                      <h3 class="project-title">Project Five</h3>
                      <p class="project-description">Coming soon!</p>
                    </div>
                </a>
            </div>
        </section>
    </main>
    );
  }

  export default Portfolio;