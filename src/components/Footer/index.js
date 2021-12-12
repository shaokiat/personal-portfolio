import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = function () {
  return (
    <div className="footer-container">
      {/* <section className="footer-subscription">
                <div className="input-areas">
                    <form className="">
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle="btn--outline">Contact Me</Button>
                    </form>
                </div>
            </section> */}
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Shao Kiat
              <i className="fab fa-typo3" />
            </Link>
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
  );
};

export default Footer;
