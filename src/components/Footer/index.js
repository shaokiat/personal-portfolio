import React from 'react'
import { Link } from 'react-scroll'
import './Footer.css'

const Footer = function () {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link
              activeClass="active"
              to="main"
              spy
              smooth
              offset={-70}
              duration={500}
              className="social-logo"
            >
              <img
                src="/images/sun.png"
                alt=""
                style={{ width: 40, height: 40 }}
              />
              Shao Kiat
            </Link>
          </div>
          <div className="resume-link">
            <a
              href="https://shaokiat.github.io/shaokiat-blog/pdf/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
          <div className="social-icons">
            <a
              className="social-icon-link github"
              href="https://github.com/shaokiat"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/shaokiat/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
