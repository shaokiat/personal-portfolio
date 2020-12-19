import React from 'react';
import CardItem from './CardsItem';
import './Cards.css';

function Cards() {
    return (

        <div id="projects" className="cards">
            <h1>These are my Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/projects"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Travel through the Islands of Singapore"
                            label="Adventure"
                            path="/projects"
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
