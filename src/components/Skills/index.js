import React from "react";
import { DiMongodb } from "react-icons/di";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="max-width">
        <h1 className="skills-title">My Skills</h1>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My Creative Skills and Experiences</div>
            <p>
              2021 Summer internship at the Data Science team in Micron gave me
              a strong introduction to solving real-world problems with data
              science and I get to experienced Machine Learning concepts
              together with data visualization tools.
            </p>
            <p>
              Practiced Software Engineering concepts taught in school through
              the development of a Hall-wide web application. Implemented
              backend capabilities using Non-SQL MongoDB database.
            </p>
            <a href="https://github.com/shaokiat">Check out my GitHub</a>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>Python</span>
                <span>85%</span>
              </div>
              <div className="line python"></div>
            </div>
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
        <div className="icons-gallery-top">
          <div className="icon-style">
            <i style={{ color: "#61DBFB" }} class="fab fa-react" />
            <div className="on-hover" id="on-hover">
              React
            </div>
          </div>
          <div className="icon-style">
            <i style={{ color: "#306998" }} class="fab fa-python" />
            <div className="on-hover" id="on-hover">
              Python
            </div>
          </div>
          <div className="icon-style">
            <i style={{ color: "#F1502F" }} class="fab fa-git-alt" />
            <div className="on-hover" id="on-hover">
              Git
            </div>
          </div>
          <div className="icon-style">
            <i style={{ color: "#f89820" }} class="fab fa-java" />
            <div className="on-hover" id="on-hover">
              Java
            </div>
          </div>
        </div>
        <div className="icons-gallery-bottom">
          <div className="icon-style">
            <i style={{ color: "#F0DB4F" }} class="fab fa-js-square" />
            <div className="on-hover" id="on-hover">
              JavaScript
            </div>
          </div>
          <div className="icon-style">
            <i style={{ color: "#264de4" }} class="fab fa-css3-alt" />
            <div className="on-hover" id="on-hover">
              CSS
            </div>
          </div>
          <div className="icon-style">
            <div>
              {" "}
              <DiMongodb style={{ color: "#589636" }} />{" "}
            </div>
            <div className="on-hover" id="on-hover">
              MongoDB
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
