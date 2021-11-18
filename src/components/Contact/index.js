import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="max-width">
        <h1 className="contact-title">Contact Me</h1>
        <div className="contact-content">
          <div class="social-icons-contact">
            <a
              class="social-icon-link-github"
              href="https://github.com/shaokiat"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <i class="fab fa-github" />
            </a>
            <a
              class="social-icon-link-linkedin"
              href="https://www.linkedin.com/in/shaokiat/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
