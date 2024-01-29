import { useState } from "react";
import "../App.css";
import kayla from "../assets/kayla.jpg";
import resume from "../assets/resume.pdf";

export default function AboutMe() {

  return (
    <section id="about">
      <h2 className="sub-heading white">/ about-me</h2>
      <div id="about-div">
        <div id="info-about-me">
          <p>
            I am currently studying <b>Full-Stack Software Engineering</b> at
            <a href="https://www.marcylabschool.org/" target="_blank">
              <b className="pink"> The Marcy Lab School </b>
            </a>
            while working as a <b>Security & Compliance Co-op</b> at
            <a href="https://www.ibm.com" target="_blank">
              <b className="pink"> IBM</b>
            </a>
            .
          </p>
          <p className="white">Technologies I am currently using/learning:</p>
          <ul id="technologies">
            <div id="tools-section-one">
              <li className="white">JavaScript</li>
              <li className="white">SQL</li>
              <li className="white">HTML</li>
            </div>
            <div id="tools-section-two">
              <li className="white">CSS</li>
              <li className="white">Express.js</li>
              <li className="white">Node.js</li>
            </div>
          </ul>
          <p id="hobbies">
            Outside of coding, I enjoy gaming, biking, boba runs, reading, and
            watching anime.
          </p>
        </div>
        <div id="kayla-img">
          <img
            src={kayla}
            height="300"
            alt="Image of Kayla Campbell"
          />
          <br />
          <a href={resume} target="_blank">
            <button>View Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}