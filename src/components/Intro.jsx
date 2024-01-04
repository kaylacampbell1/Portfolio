import { useState } from "react";
import "../App.css";

export default function Intro() {
  
  return (
    <section id="intro">
      <div id="hello">
        <h2 id="intro-heading">
          <span className="white">Hello world!</span>
          <b className="pink"> Kayla </b>
          <span className="white">typing...</span>
        </h2>
         <div id="intro-contact-container">
          <a href="https://github.com/kaylacampbell1" target="_blank">
            <i className="fa-brands fa-github pink"></i>
          </a>
          <a href="https://www.linkedin.com/in/kaylamcampbell" target="_blank">
            <i className="fa-brands fa-linkedin pink"></i>
          </a>
          <a href="mailto:kaylacampbell3003@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope pink"></i>
          </a>
        </div>
        <p>
          I am a Software Engineer and lifelong learner based in New York, NY.📍
          I am interested in Full-Stack Software Engineering, Game Development,
          and Quality Assurance.
        </p>
      </div>
      <div id="intro-pic-container">
        <h1 style={{fontSize: "250px", margin: "5px"}}>👩🏾‍💻</h1>
      </div>
    </section>
  );
}