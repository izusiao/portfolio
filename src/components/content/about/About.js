import React from 'react';
import './About.css';
import AboutMe from './AboutMe';
import AboutSkills from './AboutSkills';
import AboutPlaces from './AboutPlaces';
import AboutHobby from './AboutHobby';
import Line from './Line';

const About = () => {
    return(
        <div className="about">
            <AboutMe />
            <Line />
            <AboutSkills />
            <Line />
            <AboutPlaces />
            <Line />
            <AboutHobby />
        </div>
    )
}

export default About;