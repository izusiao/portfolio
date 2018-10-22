import React from 'react';
import Title from '../Title';

const AboutSkills = () => {
    return(
        <div className="about-intro">
            <Title title="My skills" />
            <div className="skills-icons">
                <i className="fab fa-react fa-7x"></i>
                <i className="fab fa-html5 fa-7x"></i>
                <i className="fab fa-css3 fa-7x"></i>
            </div>
        </div>
    )
}

export default AboutSkills;