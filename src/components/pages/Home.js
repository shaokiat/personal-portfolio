import React from 'react';

import '../../App.css';
import HeroSection from '../HeroSection';
import About from '../About';
import Skills from '../Skills';
import Cards from '../Cards';
import Contact from '../Contact';
import Footer from '../Footer';
import { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div id="main">
                <HeroSection />
                <About />
                <Skills />
                <Cards />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default Home;
