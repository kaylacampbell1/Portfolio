import { useState } from "react";
import "../App.css";

export default function Experiences() {
  
  return (
    <section id="experiences">
      <h2 className="sub-heading white">/ experience</h2>
      <div className="experience">
        <div className="company">
          <h3 className="pink">IBM</h3>
        </div>
        <div className="position">
          <h4 className="white">Security & Compliance P-TECH Co-op</h4>
          <p id="years">JUL 2022 - PRESENT</p>
          <ul>
            <li>
              Manage security risks by facilitating daily communication and
              meetings with engineering teams to identify and address product
              vulnerabilities
            </li>
            <li>
              Led a team of 39 employees, achieving a 100% completion rate for
              IBM/’s annual HIPAA training
            </li>
            <li>
              Promoted from summer intern to a co-op role due to demonstrated
              capacity to excel in a dynamic work environment
            </li>
          </ul>
        </div>
      </div>
      <div className="experience">
        <div className="company">
          <h3 className="pink">IBM</h3>
        </div>
        <div className="position">
          <h4 className="white">
            Corporate Social Responsibility P-TECH Co-op
          </h4>
          <p id="years">OCT 2021 - JUL 2022</p>
          <ul>
            <li>
              Assembled lesson plans and planned Hour of Code events that taught
              high school students the basics of Python, preparing them for
              upcoming college classNamees
            </li>
            <li>
              Facilitated events that familiarized P-TECH students with the
              opportunities that IBM offered, resulting in 41 Junior and
              Senior-year students applying for summer internships at the
              company
            </li>
          </ul>
        </div>
      </div>
      <div className="experience">
        <div className="company">
          <h3 className="pink">IBM</h3>
        </div>
        <div className="position">
          <h4 className="white">Cloud & Cognitive Software P-TECH Intern</h4>
          <p id="years">JUL 2021 - AUG 2021</p>
          <ul>
            <li>
              Completed internship business challenge to develop a cloud
              solution for an IBM client, presented the solution to internal
              senior leadership, and consulted with management throughout the
              6-week development period
            </li>
            <li>
              Contributed to daily team meetings to communicate progress and
              roadblocks
            </li>
            <li>
              Recognized for hard work, one of two students selected from a
              group of 60+ interns to work with IBM for an extra year as a
              Corporate Social Responsibility Co-op
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}