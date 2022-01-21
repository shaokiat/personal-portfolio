import React from 'react';
import './Projects.css';
import {
  SiJavascript,
  SiMongodb, SiNodedotjs, SiPython, SiReact, SiRedux, SiTailwindcss, SiTypescript,
} from 'react-icons/si';
import ProjectItem from '../ProjectItem/ProjectItem';

const Projects = function () {
  return (
    <div id="cards" className="projects">
      <h1>My Projects</h1>
      <div className="projects_container">
        <div className="projects_wrapper">
          <div className="projects_items">
            <ProjectItem
              src="images/cryptoverse.png"
              title="Cryptoverse"
              description="A Personal project to explore RapidApi and Web3.0.
              Connect your MetaMask wallet and view daily Crypto News. (Update: Some APIs used are current behind paywall so is unable to access."
              url="https://crypto-app-shaokiat.vercel.app/"
              githubLink="https://github.com/shaokiat/crypto_app"
              githubDescription="View source code on GitHub"
              techstack={(
                <div className="icons-gallery">
                  <div className="icon-style">
                    <img src="/images/nextjs.svg" alt="" style={{ width: 40, height: 40 }} />
                    <div className="on-hover" id="on-hover">
                      NextJS
                    </div>
                  </div>
                  <div className="icon-style">
                    <SiTypescript size={35} style={{ color: '#007acc' }} />
                    <div className="on-hover" id="on-hover">
                      TypeScript
                    </div>
                  </div>
                  <div className="icon-style">
                    <SiRedux size={35} style={{ color: '#764abc' }} />
                    <div className="on-hover" id="on-hover">
                      Redux
                    </div>
                  </div>
                  <div className="icon-style">
                    <img src="/images/metamask.png" alt="" style={{ width: 40, height: 40 }} />
                    <div className="on-hover" id="on-hover">
                      MetaMask
                    </div>
                  </div>
                  <div className="icon-style">
                    <SiTailwindcss size={35} style={{ color: '#38bdf8' }} />
                    <div className="on-hover" id="on-hover">
                      TailwindCSS
                    </div>
                  </div>
                </div>
                )}
            />
            <ProjectItem
              src="images/rhapp.jpg"
              title="Raffles Hall App"
              description={`All-in-one progressive web app for Raffles Hall. \n
              Book facilities, share timetable and order supper with your friends now!`}
              url="https://www.rhapp.lol/"
              githubLink="https://www.instagram.com/rhdevs/"
              githubDescription="Visit RHDEVs on Instagram"
              techstack={(
                <div className="icons-gallery">
                  <div className="icon-style">
                    <SiReact size={35} style={{ color: '#61DBFB' }} />
                    <div className="on-hover" id="on-hover">
                      React
                    </div>
                  </div>
                  <div className="icon-style">
                    <SiTypescript size={35} style={{ color: '#007acc' }} />
                    <div className="on-hover" id="on-hover">
                      TypeScript
                    </div>
                  </div>
                  <div className="icon-style">
                    <SiRedux size={35} style={{ color: '#764abc' }} />
                    <div className="on-hover" id="on-hover">
                      Redux
                    </div>
                  </div>
                  <div className="icon-style">
                    <SiPython size={35} style={{ color: '#306998' }} />
                    <div className="on-hover" id="on-hover">
                      Python
                    </div>
                  </div>
                  <div className="icon-style">
                    <SiMongodb size={35} style={{ color: '#589636' }} />
                    <div className="on-hover" id="on-hover">
                      MongoDB
                    </div>
                  </div>
                  <div className="icon-style">
                    <SiNodedotjs size={35} style={{ color: '#3C873A' }} />
                    <div className="on-hover" id="on-hover">
                      NodeJS
                    </div>
                  </div>
                </div>
                )}
            />
            <ProjectItem
              src="images/sk-blog.png"
              title="Personal Blog"
              description="A blog project created using Docusaurus to document my journey
              as an aspiring Software Engineer and hopefully serve as a guide for others like me."
              url="https://shaokiat.github.io/shaokiat-blog/docs/intro"
              githubLink="https://github.com/shaokiat/shaokiat-blog"
              githubDescription="View source code on GitHub"
              techstack={(
                <div className="icons-gallery">
                  <div className="icon-style">
                    <SiReact size={35} style={{ color: '#61DBFB' }} />
                    <div className="on-hover" id="on-hover">
                      React
                    </div>
                  </div>
                  <div className="icon-style">
                    <SiJavascript size={35} style={{ color: '#F0DB4F' }} />
                    <div className="on-hover" id="on-hover">
                      JavaScript
                    </div>
                  </div>
                  <div className="icon-style">
                    <img src="/images/docusaurus.png" alt="" style={{ width: 40, height: 40 }} />
                    <div className="on-hover" id="on-hover">
                      Docusaurus
                    </div>
                  </div>
                </div>
                )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
