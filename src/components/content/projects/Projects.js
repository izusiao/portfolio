import React from 'react';
import './Projects.css';
import astronomy from '../../img/astronomy.png';
import myhomepage from '../../img/myhomepage.png';

const Projects = () => {
    return(
        <div className="projects">
            <div className="projects-intro">
                <h1>My projects</h1>
            </div>
            <div className="projects-text-photo">
                <div className="projects-intro">
                    <a href="https://astronomy.izabelaozga.com" target="blank">
                        <div className="nav-item">Astronomy with Izabelka</div>
                        <div className="projects-photo">
                            <img src={astronomy} alt="" />
                        </div>
                    </a>
                    <div className="projects-description">
                        <p><i>Astronomy with Izabelka</i> is my first big project. I've started learning ReactJS on it. It's not yet finished and unresponsive, but it will be. I make it for myself and will put there everything (interested for me) about astronomy.</p>
                    </div>
                </div>
                <div className="projects-intro">
                    <a href="https://myhomepage.izabelaozga.com" target="blank">
                        <div className="nav-item">My homepage</div>
                        <div className="projects-photo">
                            <img src={myhomepage} alt="" />
                        </div>
                    </a>
                    <div className="projects-description">
                        <p><i>My homepage</i> served me to create and test some Portfolio components. I'd like to finish it and make full responsive website about me and my experience.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;