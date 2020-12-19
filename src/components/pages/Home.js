import React from 'react';

import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import { Component } from 'react';

class Home extends Component {

    componentDidUpdate() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <>
                <HeroSection />
                <Cards />
                <Footer />
            </>
        );
    }
}

export default Home;
