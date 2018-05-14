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
                    <h3>Hi, my name is Izabela.</h3>
                    <p>I would like to design and code some pretty and elegant websites.</p>
                    <p>I would like to be a web developer.</p>
                </div>
            </div>
            <div className="about-photo">
                <img src={aboutImg} alt="" />
            </div>
        </div>
    )
}

export default About;