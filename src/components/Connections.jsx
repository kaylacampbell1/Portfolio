import { useState } from "react";
import "../App.css";

export default function Connections() {

  return (
    <section id="connect">
      <h3 id="connect-heading" className="white">
        Stay Connected
      </h3>
      <span>
        <div id="connect-github">
          <p>GitHub</p>
          <a href="https://github.com/kaylacampbell1" target="_blank">
            <i className="fa-brands fa-github pink"></i>
          </a>
        </div>
        <div id="connect-linkedin">
          <p>LinkedIn</p>
          <a href="https://www.linkedin.com/in/kaylamcampbell" target="_blank">
            <i className="fa-brands fa-linkedin pink"></i>
          </a>
        </div>
        <div id="connect-email">
          <p>E-mail</p>
          <a href="mailto:kaylacampbell3003@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope pink"></i>
          </a>
        </div>
      </span>
    </section>
  );
}