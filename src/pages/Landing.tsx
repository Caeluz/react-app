import React, { useState } from "react";
import MountainImage from "../images/mountains.jpg";
import "./Landing.css";

const Landing: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const handleNextSection = () => {
    setCurrentSection((prevSection) => prevSection + 1);
  };

  const handlePrevSection = () => {
    setCurrentSection((prevSection) => Math.max(prevSection - 1));
  };

  return (
    <div className="fullscreen-container">
      <div className="background-image">
        <div className="centered-text">
          <p>Start</p>
          <h1>Welcome</h1>
          {currentSection === 1 && (
            <React.Fragment>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </React.Fragment>
          )}
          {currentSection === 2 && (
            <React.Fragment>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </React.Fragment>
          )}
          {currentSection === 3 && (
            <React.Fragment>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
            </React.Fragment>
          )}
        </div>
        <div className="nav-buttons">
          {currentSection > 1 && (
            <button className="cta-button" onClick={handlePrevSection}>
              .
            </button>
          )}
          {currentSection < 3 && (
            <button className="cta-button" onClick={handleNextSection}>
              .
            </button>
          )}
          {/* <button className="cta-button">Learn More</button> */}
        </div>
        <button>Test</button>
      </div>
    </div>
  );
};

export default Landing;
