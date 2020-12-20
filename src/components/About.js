import React from 'react';
import './About.css';

function About() {
    return (
        <section id="about" className='about'>
            <div className="about-container">
                <h1 className="about-title">About Me</h1>
                <div className="about-content">
                    <div className="column left">
                        <img src="images/portrait2.jpg" alt="" />
                    </div>
                    <div className="column right">
                        <div className="text">I'm Shao Kiat and I'm a Programmer</div>
                        <p>This is my portfolio website! Check me out!</p>
                        <p>I am a Year 2 Computer Science Undergraduate at National University
                        of Singapore and this is my attempt at building a portfolio website using React.js.
                            I enjoy exploring new programming ideas and trying out new programming languages.</p>
                        <a href="#">Download CV</a>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default About;
