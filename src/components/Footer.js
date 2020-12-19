import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the Adventure Newsletter to receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time.
                </p>
                <div className="input-areas">
                    <form className="">
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Shao Kiat
              <i class='fab fa-typo3' />
                        </Link>
                    </div>
                    <div class='social-icons'>
                        <a
                            class='social-icon-link github'
                            href="https://github.com/shaokiat"
                            aria-label='GitHub'
                        >
                            <i class='fab fa-github' />
                        </a>
                        <a
                            class='social-icon-link linkedin'
                            href="https://www.linkedin.com/in/shaokiat/"
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
