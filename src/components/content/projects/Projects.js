import React from 'react';
import './Projects.css';
import Title from '../Title';
import Photo from './Photo';
import astronomy from '../../img/astronomy.png';
import myhomepage from '../../img/myhomepage.png';

const Projects = () => {
    return(
        <div className="projects">
            <div className="projects-intro">
                <Title title="My projects" />
            </div>
            <div className="projects-text-photo">
                <div className="projects-intro">
                    <Photo photo={astronomy} title="Astronomy with Izabelka" url="http://astronomy.izabelaozga.com" />
                    <div className="projects-description">
                        <p><i>Astronomy with Izabelka</i> is my first big project. I've started learning ReactJS on it. It's not yet finished and unresponsive, but it will be soon. I make it for myself and will put there everything (interested for me) about astronomy.</p>
                    </div>
                </div>
                <div className="projects-intro">
                    <Photo photo={myhomepage} title="My homepage" url="http://myhomepage.izabelaozga.com" />
                    <div className="projects-description">
                        <p><i>My homepage</i> served me to create and test some Portfolio components. I'd like to finish it and make full responsive website about me and my experience.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;