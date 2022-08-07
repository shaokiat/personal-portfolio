import React from 'react'
import {
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiApollographql,
  SiNodedotjs,
  SiReact,
  SiAmazonaws,
} from 'react-icons/si'

import './Skills.css'

const Skills = function () {
  return (
    <section id="skills" className="skills">
      <div className="max-width">
        <h1 className="skills-title">My Skills</h1>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My Creative Skills and Experiences</div>
            <p>
              2022 Summer internship at Nested Technologies as a Software
              Engineering Intern gave me a strong introduction to DevOps using
              AWS hosting services such as EKS and ECS. I had the opportunity to
              set up and ensure scalability of the company&apos;s web
              applications with proper CI/CD.
            </p>
            <p>
              Practiced Software Engineering concepts taught in school through
              the development of a Hall-wide web application. Implemented
              backend capabilities using Non-SQL MongoDB database.
            </p>
            <p>
              Currently exploring NextJS web framework capabilities with
              personal projects.
            </p>
            <a
              href="https://github.com/shaokiat"
              target="_blank"
              rel="noreferrer"
            >
              Check out my GitHub
            </a>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>Enthusiasm</span>
                <span>95%</span>
              </div>
              <div className="line js" />
            </div>
            <div className="bars">
              <div className="info">
                <span>Adaptability</span>
                <span>95%</span>
              </div>
              <div className="line python" />
            </div>
            <div className="bars">
              <div className="info">
                <span>Team Work</span>
                <span>90%</span>
              </div>
              <div className="line java" />
            </div>

            <div className="bars">
              <div className="info">
                <span>Problem-solving</span>
                <span>85%</span>
              </div>
              <div className="line html" />
            </div>
            <div className="bars">
              <div className="info">
                <span>Positivity</span>
                <span>80%</span>
              </div>
              <div className="line css" />
            </div>
          </div>
        </div>
        <div className="tech-stack-container">
          <div className="tech-stack-header">Frontend</div>
          <div className="icons-gallery">
            <div className="icon-style">
              <SiReact size={50} style={{ color: '#61DBFB' }} />
              <div className="on-hover" id="on-hover">
                React
              </div>
            </div>
            <div className="icon-style">
              <div>
                <SiTypescript size={50} style={{ color: '#007acc' }} />
              </div>
              <div className="on-hover" id="on-hover">
                TypeScript
              </div>
            </div>
            <div className="icon-style">
              <SiJavascript size={50} style={{ color: '#F0DB4F' }} />
              <div className="on-hover" id="on-hover">
                JavaScript
              </div>
            </div>
            <div className="icon-style">
              <div>
                <SiHtml5 size={50} style={{ color: '#E10098' }} />
              </div>
              <div className="on-hover" id="on-hover">
                HTML
              </div>
            </div>
            <div className="icon-style">
              <SiCss3 size={50} style={{ color: '#264de4' }} />
              <div className="on-hover" id="on-hover">
                CSS
              </div>
            </div>
            <div className="icon-style">
              <img
                src="/images/nextjs.svg"
                alt=""
                style={{ width: 70, height: 50 }}
              />
              <div className="on-hover" id="on-hover">
                NextJS
              </div>
            </div>
          </div>
          <div className="tech-stack-header">Backend</div>
          <div className="icons-gallery">
            <div className="icon-style">
              <div>
                <SiNodedotjs size={50} style={{ color: '#3C873A' }} />
              </div>
              <div className="on-hover" id="on-hover">
                NodeJS
              </div>
            </div>
            <div className="icon-style">
              <div>
                <SiGraphql size={50} style={{ color: '#E10098' }} />
              </div>
              <div className="on-hover" id="on-hover">
                GraphQL
              </div>
            </div>
            <div className="icon-style">
              <div>
                <SiApollographql size={50} style={{ color: '#E10098' }} />
              </div>
              <div className="on-hover" id="on-hover">
                Apollo
              </div>
            </div>
            <div className="icon-style">
              <i style={{ color: '#306998' }} className="fab fa-python" />
              <div className="on-hover" id="on-hover">
                Python
              </div>
            </div>
            <div className="icon-style">
              <i style={{ color: '#f89820' }} className="fab fa-java" />
              <div className="on-hover" id="on-hover">
                Java
              </div>
            </div>
            <div className="icon-style">
              <div>
                <SiMongodb size={50} style={{ color: '#589636' }} />
              </div>
              <div className="on-hover" id="on-hover">
                MongoDB
              </div>
            </div>
          </div>
          <div className="tech-stack-header">Others</div>
          <div className="icons-gallery">
            <div className="icon-style">
              <img src="/images/aws.png" alt="" style={{ width: 60 }} />
              <div className="on-hover" id="on-hover">
                AWS
              </div>
            </div>
            <div className="icon-style">
              <i style={{ color: '#F1502F' }} className="fab fa-git-alt" />
              <div className="on-hover" id="on-hover">
                Git
              </div>
            </div>
            <div className="icon-style">
              <img src="/images/sklearn.svg" alt="" style={{ width: 70 }} />
              <div className="on-hover" id="on-hover">
                sklearn
              </div>
            </div>
            <div className="icon-style">
              <img src="/images/streamlit.png" alt="" style={{ width: 60 }} />
              <div className="on-hover" id="on-hover">
                Streamlit
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
