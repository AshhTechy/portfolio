import React from "react";
import "./Navbar.css";
import { Link,useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <nav>
          <ul className="nav__links">
            <li>
              <a class="b" href="#" role="button" onClick={() => navigate("/")}>
                Home
              </a>
            </li>
            <li>
              <a
                class="b"
                href="#"
                role="button"
                onClick={() => navigate("Aboutme")}
              >
                About Me
              </a>
            </li>
            <li>
              <Link to="/Contact" class="b" role="button">
                Contact Me
              </Link>
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
