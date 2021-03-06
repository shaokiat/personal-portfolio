import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <div className="max-width">
                <div className="content">
                    <div className="text-1">Hello, my name is</div>
                    <div className="text-2">Shao Kiat</div>
                    <div className="text-3">And I'm a Computer Science Undergraduate</div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;