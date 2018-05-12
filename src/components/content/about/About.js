import React from 'react';
import './About.css';
import Title from '../Title';
import myPhoto from '../../img/ozga-izabela.jpg'

const About = () => {
    return(
        <div className="about">
            <Title title="About me" />
            <div className="about-me">
                <div className="about-me-text">
                    <h1>Izabela Ozga</h1>
                    <p>Hi, my name is Izabela. I am 29, come from Poland. For three years I have lived in Germany.</p>
                </div>
                <div className="my-photo">
                    <img src={myPhoto} alt="" />
                </div>
            </div>
            <Title title="Skills" />
            <Title title="Hobbys" />
            <Title title="Contact" />
        </div>
    );
}

export default About;