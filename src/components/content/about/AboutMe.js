import React from 'react';
import Title from '../Title';
import aboutImg from '../../img/about-me.jpg';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return(
        <div className="about-text-photo" style={{ paddingTop: "20px" }}>
            <div className="about-intro" >
                <Title title="About me" />
                <div className="about-description">
                    <p>My name is Izabela. I'm 29, come from Poland. In 2013 I graduated from Wroclaw University of Science and Technology with the master's degree in electrical engineering. Since my graduation I've worked in automation branch. For three years I've been living in Germany.</p>
                    <p>Some time ago I decided to find the right way and changing my life. I've started to learn programming by myself.</p>
                    <p>Front-end was my choice, because I love designing, drawing and creating. Now I know, that was the right choice.</p>
                    <p>In my free time I learn React from tutorials and create small <Link to="/projects">projects</Link>. It makes me so much fun. I want to do it professional.</p>
                </div>
            </div>
            <div className="about-photo">
                <img src={aboutImg} alt="" style={{ maxWidth: "350px"}} />
            </div>
        </div>
    )
}

export default AboutMe;