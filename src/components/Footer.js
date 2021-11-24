import React from 'react';

function Footer(){
    return (
      <footer>
      <h2>Contact Me</h2>
      <div class="contact-me" id="contact-me">
        <a href="tel+6199447299"><h4 class="contact-info" id="phone">619-944-7299</h4></a>
        <a href="mailto:mike@glquote.com"><h4 class="contact-info" id="email">Email Me</h4></a>
        <a href="https://github.com/michael-orr" target="blank"><h4 class="contact-info" id="github">Git Hub</h4></a>
        <a href="http://linkedin.com/in/mike-orr-649b622b" target="blank"><h4 class="contact-info" id="linkedin">LinkedIn</h4></a>
      </div>
  </footer>
    );
  }

  export default Footer;