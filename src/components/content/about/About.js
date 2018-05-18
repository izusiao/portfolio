import React from 'react';
import './About.css';
import AboutMe from './AboutMe';
import AboutSkills from './AboutSkills';
import AboutPlaces from './AboutPlaces';

const About = () => {
    return(
        <div className="about">
            <AboutMe />
            <AboutSkills />
            <AboutPlaces />
        </div>
    )
}

export default About;