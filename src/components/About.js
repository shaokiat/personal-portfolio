import React from 'react';
import './About.css';

function About() {
    return (
        <section id="about" className='about'>
            <div className="max-width">
                <h2 className="about-title">About Me</h2>
                <div className="about-content">
                    <div className="about-img">
                        <img src="images/portrait2.jpg" alt="" />
                    </div>
                    <div className="about-content-right">
                        <div className="text">I'm Shao Kiat and I'm a Programmer</div>
                        <p>This is my portfolio website! Check me out!</p>
                        <p>I am a Year 2 Computer Science Undergraduate at National University
                            of Singapore and this is my attempt at building a portfolio website using React.js</p>
                        <a href="#">Download CV</a>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default About;
