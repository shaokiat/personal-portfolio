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
            <div className="text">
              <text>Hi there! I&apos;m Shao Kiat!</text>
            </div>
            <p>This is my portfolio website!</p>
            <p>
              I am a Final Year Computer Science Undergraduate at National
              University of Singapore. I enjoy exploring new programming ideas
              and documenting my progress as an aspiring software engineer.
            </p>
            <p>
              Recently, I have been diving more in-depth into web development
              using Next.js with TailwindCSS. I am also exploring Web3.0 with
              decentralized application on various crypto chains!
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
