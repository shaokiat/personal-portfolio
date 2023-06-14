import React from 'react'
import './Contact.css'

const Contact = function () {
  return (
    <section id="contact" className="contact">
      <div className="max-width">
        <h1 className="contact-title">Contact Me</h1>
        <div className="contact-content">
          <div className="">
            <div className="social-icons-contact">
              <a
                className="social-icon-link-github"
                href="https://github.com/shaokiat"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github" />
              </a>
              <a
                className="social-icon-link-linkedin"
                href="https://www.linkedin.com/in/shaokiat/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="caldotcom-link">
            <a href="https://cal.com/shaokiat" target="_blank" rel="noreferrer">
              cal.com/shaokiat
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
