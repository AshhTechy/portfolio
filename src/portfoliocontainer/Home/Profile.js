import React from "react";
import Typical from "react-typical";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100084429641881">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-name">
            <span className="primary-text">
              {" "}
              Hello I'M <span className="highlighted-text">Ashwin </span>
            </span>
          </div>
          <div className="profile-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={["Ashwin S 😇", 1000, "Software Developer 💻", 1000]}
                />
              </h1>
              <span className="profile-tagline">
                A Beginner who is improving himself everyday to excell in
                everything he does😁
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">{""}Hire Me </button>
            <a href="20CS010_Resume.pdf" download="My Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
