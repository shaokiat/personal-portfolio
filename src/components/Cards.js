import React from 'react';
import CardItem from './CardsItem';
import './Cards.css';

function Cards() {
    return (

        <div id="projects" className="cards">
            <h1>My Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/gradpad.png"
                            text="CS2103T Software Engineering Project"
                            label="Module Project"
                            url="https://ay2021s1-cs2103t-t09-1.github.io/tp/"
                        />
                        <CardItem
                            src="images/orbital.png"
                            text="SayonaraCorona Orbital2020 Project"
                            label="Orbital2020"
                            url="https://github.com/shaokiat/SayonaraCorona"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-8.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/projects"
                        />
                        <CardItem
                            src="images/img-6.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/projects"
                        />
                        <CardItem
                            src="images/img-7.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/projects"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
