import React from 'react'
import {
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiJava,
  SiDocker,
  SiKubernetes,
} from 'react-icons/si'
import { Row, Col } from 'antd'
import './Skills.css'
import { SiGithubactions } from 'react-icons/si'
import { SiPuppeteer } from 'react-icons/si'
import { SiJest } from 'react-icons/si'

const TechStack = () => {
  return (
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
          <img
            src="/images/python.png"
            alt=""
            style={{ width: 50, height: 50 }}
          />
          <div className="on-hover" id="on-hover">
            Python
          </div>
        </div>
        <div className="icon-style">
          <SiJava size={50} style={{ color: '#f89820' }} />
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
          <img src="/images/aws.png" alt="" style={{ width: 60, height: 36 }} />
          <div className="on-hover" id="on-hover">
            AWS
          </div>
        </div>
        <div className="icon-style">
          <img src="/images/sklearn.svg" alt="" style={{ width: 70 }} />
          <div className="on-hover" id="on-hover">
            sklearn
          </div>
        </div>
        <div className="icon-style">
          <img src="/images/solidity.png" alt="" style={{ width: 50 }} />
          <div className="on-hover" id="on-hover">
            Solidity
          </div>
        </div>
        <div className="icon-style">
          <SiDocker size={50} style={{ color: '#0db7ed' }} />{' '}
          <div className="on-hover" id="on-hover">
            Docker
          </div>
        </div>
        <div className="icon-style">
          <SiKubernetes size={50} style={{ color: '#326ce5' }} />{' '}
          <div className="on-hover" id="on-hover">
            Kubernetes
          </div>
        </div>
      </div>
    </div>
  )
}

const Card = (props) => {
  return (
    <div className="card">
      <Row justify="start">
        <Col className="title">
          <text>{`${props.position} @ `}</text>
          <text style={{ fontWeight: '300' }}>{props.company}</text>
        </Col>
      </Row>
      <Row>
        <Col span={20} className="duration">
          {props.duration}
        </Col>
      </Row>
      {props.experience1 && <p>{`> ${props.experience1}`}</p>}
      {props.experience2 && <p>{`> ${props.experience2}`}</p>}
      {props.experience3 && <p>{`> ${props.experience3}`}</p>}
      <div className="techstack-container">{props.techstack}</div>
    </div>
  )
}

const Experiences = () => {
  return (
    <div>
      <Row justify={'space-around'}>
        <Col span={22} offset={1}>
          <Card
            company="Angsana Technology"
            position="Software Engineer Intern"
            experience1="Implemented CI pipeline such as API and end-to-end tests, and automating them using GitHub Actions, ensuring
successful code commits."
            experience2="Set up automated UI testing for the web-application."
            experience3="Develop Docker containers for project in preparation for production and scaling."
            duration="Jan 2023 - Present | Singapore"
            techstack={
              <div className="icons-gallery">
                <div className="icon-style">
                  <SiDocker size={40} style={{ color: '#0db7ed' }} />{' '}
                  <div className="on-hover" id="on-hover">
                    Docker
                  </div>
                </div>
                <div className="icon-style">
                  <img
                    src="/images/aws.png"
                    alt=""
                    style={{
                      width: 48,
                      height: 30,
                    }}
                  />
                  <div className="on-hover" id="on-hover">
                    AWS
                  </div>
                </div>
                <div className="icon-style">
                  <SiGithubactions size={40} style={{ color: '#0db7ed' }} />{' '}
                  <div className="on-hover" id="on-hover">
                    GitHub Actions
                  </div>
                </div>
                <div className="icon-style">
                  <SiPuppeteer size={40} />{' '}
                  <div className="on-hover" id="on-hover">
                    Puppeteer
                  </div>
                </div>
                <div className="icon-style">
                  <SiJest size={40} style={{ color: 'red' }} />{' '}
                  <div className="on-hover" id="on-hover">
                    Jest
                  </div>
                </div>
              </div>
            }
          />
        </Col>
      </Row>
      <Row justify={'space-around'}>
        <Col span={22} offset={1}>
          <Card
            company="Nested Technologies"
            position="Software Engineer Intern"
            experience1="Advised and implemented suitable AWS hosting services with proper cost analysis, successfully reduced hosting
cost by 30%."
            experience2="Handled production deployment of web applications on AWS ECS and EKS to ensure scalability with zero
downtime, with appropriate CI/CD on GitHub."
            experience3="Improved and debugged the core web scraping feature of application; Implemented new ways of scraping infinite
scrolling pages."
            duration="May 2022 - Aug 2022 | Singapore"
            techstack={
              <div className="icons-gallery">
                <div className="icon-style">
                  <SiDocker size={40} style={{ color: '#0db7ed' }} />{' '}
                  <div className="on-hover" id="on-hover">
                    Docker
                  </div>
                </div>
                <div className="icon-style">
                  <SiKubernetes size={40} style={{ color: '#326ce5' }} />{' '}
                  <div className="on-hover" id="on-hover">
                    Kubernetes
                  </div>
                </div>
                <div className="icon-style">
                  <img
                    src="/images/aws.png"
                    alt=""
                    style={{
                      width: 48,
                      height: 30,
                    }}
                  />
                  <div className="on-hover" id="on-hover">
                    AWS
                  </div>
                </div>
                <div className="icon-style">
                  <img
                    src="/images/python.png"
                    alt=""
                    style={{ width: 40, height: 40 }}
                  />
                  <div className="on-hover" id="on-hover">
                    Python
                  </div>
                </div>
              </div>
            }
          />
        </Col>
      </Row>
      <Row justify={'space-around'}>
        <Col span={22} offset={1}>
          <Card
            company="Micron Semiconductor Asia"
            position="Data Science Intern"
            experience1="Developed a data science web application by integrating existing algorithms into usable interface, resulted in 50%
of engineers having access to it."
            experience2="Conducted non-linear regression models to map the correction offset of manufacturing defects in the wafers,
raising production yield."
            duration="May 2021 - Jul 2021 | Singapore"
            techstack={
              <div className="icons-gallery">
                <div className="icon-style">
                  <img
                    src="/images/python.png"
                    alt=""
                    style={{ width: 40, height: 40 }}
                  />
                  <div className="on-hover" id="on-hover">
                    Python
                  </div>
                </div>
                <div className="icon-style">
                  <img src="/images/sklearn.svg" alt="" style={{ width: 60 }} />
                  <div className="on-hover" id="on-hover">
                    sklearn
                  </div>
                </div>
              </div>
            }
          />
        </Col>
      </Row>
    </div>
  )
}

const Skills = function () {
  return (
    <section id="skills" className="skills">
      <div className="max-width">
        <h1 className="skills-title">My Experiences</h1>
        <Experiences />
        <TechStack />
      </div>
    </section>
  )
}

export default Skills
