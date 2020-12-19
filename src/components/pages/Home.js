import React from 'react';

import '../../App.css';
import HeroSection from '../HeroSection';
import About from '../About';
import Cards from '../Cards';
import Footer from '../Footer';
import { Component } from 'react';
import { Link } from 'react-scroll';

class Home extends Component {

    render() {
        return (
            <div id="main">
                <HeroSection />
                <About />
                <Cards />
                <Footer />
            </div>
        );
    }
}

export default Home;
