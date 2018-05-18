import React from 'react';
import './About.css';
import AboutMe from './AboutMe';
import AboutSkills from './AboutSkills';
import AboutPlaces from './AboutPlaces';
import AboutHobby from './AboutHobby';

const About = () => {
    return(
        <div className="about">
            <AboutMe />
            <AboutSkills />
            <AboutPlaces />
            <AboutHobby />
        </div>
    )
}

export default About;