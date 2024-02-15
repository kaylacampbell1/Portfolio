import { useState } from "react";
import "../App.css";

export default function Nav() {

  return (
    <header>
      <div id="name-header">
        <h1 className="white">Kayla Campbell</h1>
      </div>
      <nav id="nav">
        <a href="#about">About</a>
        <a href="#experiences">Experience</a>
        <a href="#projects">Projects</a>
        {/* <a href="#education">Education</a> */}
        <a href="#connect">Contact Me</a>
      </nav>
    </header>
  );
}