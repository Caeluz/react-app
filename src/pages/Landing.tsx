import React, { useState } from "react";
// import MountainImage from "../images/mountains.jpg";
import { GrNext, GrPrevious } from "react-icons/gr";
import "./Landing.css";
import { Link } from "react-router-dom";

// redux
import store, { loginSuccess, loginFailure } from "../store/Store";

const Landing: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 3;

  console.log("Token:", store.getState().token);

  const handleNextSection = () => {
    setCurrentSection((prevSection) => (prevSection % totalSections) + 1);
  };

  const handlePrevSection = () => {
    setCurrentSection((prevSection) =>
      prevSection > 1 ? prevSection - 1 : totalSections
    );
  };

  const renderCircles = () => {
    const circles = [];
    for (let i = 1; i <= totalSections; i++) {
      circles.push(
        <div
          key={i}
          className={`circle ${currentSection === i ? "active" : ""}`}
        />
      );
    }
    return circles;
  };

  return (
    <div className="fullscreen-container">
      <div className="background-image">
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo">
              Your Logo
            </Link>
            <div className="navbar-links">
              <Link to="/" className="navbar-link">
                Home
              </Link>
              <Link to="/about" className="navbar-link">
                About
              </Link>
              <Link to="/contact" className="navbar-link">
                Contact
              </Link>
            </div>
          </div>
        </nav>
        <div className="centered-text">
          <p>Start</p>
          <h1>Welcome</h1>
          <div className="paragraph-container">
            {currentSection === 1 && (
              <React.Fragment>
                <p>
                  1. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </React.Fragment>
            )}
            {currentSection === 2 && (
              <React.Fragment>
                <p>
                  2. Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
              </React.Fragment>
            )}
            {currentSection === 3 && (
              <React.Fragment>
                <p>
                  3. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>
              </React.Fragment>
            )}
          </div>
        </div>
        <div className="nav-buttons">
          <GrPrevious onClick={handlePrevSection} size={32} color="white" />
          <GrNext onClick={handleNextSection} size={32} color="white" />
        </div>
        <div className="circle-container">{renderCircles()}</div>

        {/* <button className="cta-button">Test</button> */}
      </div>
    </div>
  );
};

export default Landing;
