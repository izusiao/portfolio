import React from 'react';
import './About.css';
import Title from '../Title';
import aboutImg from '../../img/about-me.jpg';

const About = () => {
    return(
        <div className="about">
            <div className="about-intro">
                <Title title="About me" />
                <div className="description">
                    <p>My name is Izabela. I am 29, come from Poland. In 2013 I graduated from Wroclaw University of Science and Technology with the master's degree in electrical engineering. Since my graduation I work in automation branch. For three years I live in Germany.</p>
                </div>
            </div>
            <div className="about-photo">
                <img src={aboutImg} alt="" />
            </div>
        </div>
    )
}

export default About;