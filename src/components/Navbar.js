import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

function Navbar() {
  return (
    <header id="main-header">
      <a href="./index.html#main-header" className="site-id">
        <h1 className="portfolio-name">Michael Orr</h1>
      </a>
      <div className="nav-separator"></div>
      <nav className="header-nav">
        <ul className="main-menu">
          <li className="main-menu-item nav-item">
            <Link to="/">Work</Link>
          </li>
          <li className="main-menu-item nav-item">
            <Link to="/about">About Me</Link>
          </li>
          <li className="main-menu-item nav-item">
          <Link to="/contact">Contact Me</Link>
          </li>
          <li className="main-menu-item nav-item">
            <a href="./assets/images/Resume - Michael Orr.pdf" download>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
