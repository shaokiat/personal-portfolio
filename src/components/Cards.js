import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div id="projects" className="cards">
            <h1>My Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/rhapp.jpg"
                            text="Raffles Hall App"
                            label="Hall Software Development Project"
                            url="https://www.rhapp.lol/"
                        />
                        <CardItem
                            src="images/gradpad.png"
                            text="CS2103T Software Engineering Project"
                            label="Module Project"
                            url="https://ay2021s1-cs2103t-t09-1.github.io/tp/"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/orbital.png"
                            text="SayonaraCorona Orbital2020 Project"
                            label="Orbital2020"
                            url="https://github.com/shaokiat/SayonaraCorona"
                        />
                        <CardItem
                            src="images/homepage.png"
                            text="Personal Portfolio Page"
                            label="Winter Portfolio Project"
                            url="https://github.com/shaokiat/personal-portfolio"
                        />
                        <CardItem
                            src="images/img-7.jpg"
                            text="New Projects Coming up"
                            label="Coming Soon"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
