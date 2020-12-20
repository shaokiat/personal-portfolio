import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <section id="skills" className='skills'>
            <div className="max-width">
                <h1 className="skills-title">My Skills</h1>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">My Creative Skills and Experiences</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <a href="#">Dummy Button</a>
                    </div>
                    <div className="column right">
                        <div className="bars">
                            <div className="info">
                                <span>Java</span>
                                <span>80%</span>
                            </div>
                            <div className="line java"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>JS</span>
                                <span>70%</span>
                            </div>
                            <div className="line js"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>Python</span>
                                <span>70%</span>
                            </div>
                            <div className="line python"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>HTML</span>
                                <span>50%</span>
                            </div>
                            <div className="line html"></div>
                        </div>
                        <div className="bars">
                            <div className="info">
                                <span>CSS</span>
                                <span>50%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                    </div>
                </div>
                <div className="icons-gallery">
                    <div className="icon-style">
                        <i style={{ "color": "#61DBFB" }} class='fab fa-react' />
                        <div className="on-hover" id="on-hover">React</div>
                    </div>
                    <div className="icon-style">
                        <i style={{ "color": "#306998" }} class='fab fa-python' />
                        <div className="on-hover" id="on-hover">Python</div>
                    </div>
                    <div className="icon-style">
                        <i style={{ "color": "#F1502F" }} class='fab fa-git-alt' />
                        <div className="on-hover" id="on-hover">Git</div>
                    </div>
                    <div className="icon-style">
                        <i style={{ "color": "#f89820" }} class='fab fa-java' />
                        <div className="on-hover" id="on-hover">Java</div>
                    </div>
                    <div className="icon-style">
                        <i style={{ "color": "#F0DB4F" }} class='fab fa-js-square' />
                        <div className="on-hover" id="on-hover">JavaScript</div>
                    </div>
                    <div className="icon-style">
                        <i style={{ "color": "#264de4" }} class='fab fa-css3-alt' />
                        <div className="on-hover" id="on-hover">CSS</div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Skills;
