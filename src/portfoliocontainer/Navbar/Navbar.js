import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <ul className="nav__links">
            <li>
              <a class="btn highlighted-btn" href="#" role="button">
                Home
              </a>
            </li>
            <li>
            <a class="btn highlighted-btn" href="#" role="button">
                Projects
              </a>
            </li>
            <li>
            <a class="btn highlighted-btn" href="#" role="button">
                About Me
              </a>
            </li>
          </ul>
        </nav>
        <p className="menu cta">Menu</p>
      </header>
      <div className="overlay">
        <a className="close">&times;</a>
        <div className="overlay__content">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
        </div>
      </div>
    </div>
  );
}
