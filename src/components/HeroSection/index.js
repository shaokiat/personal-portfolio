import React from 'react'
import '../../App.css'
import './HeroSection.css'

const HeroSection = function () {
  return (
    <section className="hero-container">
      <video src="/videos/aurora.mp4" autoPlay loop muted />
      <div className="max-width">
        <div className="hero-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Shao Kiat</div>
          <div className="text-3">
            <text>And I&apos;m a Data Scientist</text>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
