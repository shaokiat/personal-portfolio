import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="max-width">
        <h1 className="about-title">About Me</h1>
        <div className="about-content">
          <div className="column left">
            <img src="images/portrait3.jpg" alt="" />
          </div>
          <div className="column right">
            <div className="text">Hi there! I'm Shao Kiat!</div>
            <p>This is my portfolio website! Check me out!</p>
            <p>
              I am a Penultimate Computer Science Undergraduate at National
              portfolio website using React.js. I enjoy exploring new
              programming ideas and documenting my progress as an aspiring
              software engineer.
            </p>
            <a
              href="https://shaokiat.github.io/shaokiat-blog/"
              target="_blank"
              rel="noreferrer"
            >
              Check out my Blog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
