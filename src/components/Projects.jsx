import { useState } from "react";
import "../App.css";
import oasisPic from "../assets/projects/oasis.png";
import cultureCornerPic from "../assets/projects/culture-corner.png";

export default function Projects() {
  
  return (
    <section id="projects">
      <h2 className="sub-heading white">/ projects</h2>
      <div className="projects-div">
        <h3 className="project-name white">Culture Corner</h3>
        <span>
          <a
            href="https://culture-corner.github.io/Culture-Corner/"
            target="_blank"
          >
            <img
              src={cultureCornerPic}
              alt="Snapshot of the culture corner website"
              className="project-img"
            />
          </a>
          <div className="project-info-container">
            <p className="project-description">
              Culture Corner introduces users to meals from a collection of
              cuisines. Choose your favorite meal from any cuisine or click the
              “randomizer” button to get a random meal. Follow the recipe and
              instructions and enjoy your breakfast, lunch, or dinner.
            </p>
            <span className="tools">
              <button>JavaScript</button>
              <button>HTML</button>
              <button>CSS</button>
            </span>
            <span className="view-project">
              <span className="view-code">
                <a
                  href="https://github.com/Culture-Corner/Culture-Corner"
                  target="_blank"
                >
                  <p className="white">Code</p>
                  <i
                    className="fa-brands fa-github white"
                    style={{fontSize: "18px"}}
                  ></i>
                </a>
              </span>
              <span className="view-site">
                <a
                  href="https://culture-corner.github.io/Culture-Corner/"
                  target="_blank"
                >
                  <p className="white">Live Site</p>
                  <i
                    className="fa-solid fa-up-right-from-square white"
                    style={{fontSize: "16px"}}
                  ></i>
                </a>
              </span>
            </span>
          </div>
        </span>
      </div>
      <div className="projects-div">
        <h3 className="project-name white">Oasis</h3>
        <span>
          <a href="https://serene-valley.github.io/Oasis/" target="_blank">
            <img
              src={oasisPic}
              alt="Snapshot of the oasis website"
              className="project-img"
            />
          </a>
          <div className="project-info-container">
            <p className="project-description">
              Oasis serves as a resource for individuals who are in need of a
              home, healthcare, and education.
            </p>
            <span className="tools">
              <button>HTML</button>
              <button>CSS</button>
              <button>Bootstrap</button>
            </span>
            <span className="view-project">
              <span className="view-code">
                <a
                  href="https://github.com/Serene-Valley/Oasis"
                  target="_blank"
                >
                  <p className="white">Code</p>
                  <i
                    className="fa-brands fa-github white"
                    style={{fontSize: "18px"}}
                  ></i>
                </a>
              </span>
              <span className="view-site">
                <a
                  href="https://serene-valley.github.io/Oasis/"
                  target="_blank"
                >
                  <p className="white">Live Site</p>
                  <i
                    className="fa-solid fa-up-right-from-square white"
                    style={{fontSize: "16px"}}
                  ></i>
                </a>
              </span>
            </span>
          </div>
        </span>
      </div>
    </section>
  );
}