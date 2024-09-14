import React from 'react'
import './About.css'

const About = function () {
  return (
    <section id="about" className="about">
      <div className="max-width">
        <h1 className="about-title">About Me</h1>
        <div className="about-content">
          <div className="column left">
            <img src="images/portrait.jpg" alt="" />
          </div>
          <div className="column right">
            <div className="title">
              <text>Hi there! I&apos;m Shao Kiat!</text>
            </div>
            <p>This is my portfolio website!</p>
            <p>
              I am a Data Scientist at Micron with a Computer Science degree from NUS. 
              I am passionate about leveraging data to solve complex problems and drive innovation. 
              Focused on transforming data into actionable insights, I thrive on challenges that push the boundaries of technology and efficiency. 
            </p>
            <p>
              Let&apos;s connect and explore new possibilities!
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
  )
}

export default About
