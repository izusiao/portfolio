import React from 'react';
import Title from '../Title';
import aboutImg from '../../img/about-me.jpg';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return(
        <div className="about-text-photo" style={{ paddingTop: "20px" }}>
            <div className="about-intro" >
                <Title title="About me" className="h1-underline"/>
                <div className="about-description">
                    <p>My name is <b>Izabela</b>. I'm 29, come from Poland. In 2013 I graduated from <b>Wroclaw University of Science and Technology</b> with the <b>master's degree</b> in electrical engineering. Since my graduation I've worked in automation branch. For three years I've been living in Germany.</p>
                    <p>Some time ago I decided to find the right way and changing my life. I've started to learn <b>programming</b> by myself.</p>
                    <p><b>Front-end</b> was my choice, because I love designing, drawing and creating. Now I know, that was the right choice.</p>
                    <p>In my free time I learn <b>ReactJS</b> from tutorials and create small <Link to="/projects">projects</Link>. It makes me so much fun. I want to do it professional.</p>
                </div>
            </div>
            <div className="about-photo">
                <img src={aboutImg} alt="" style={{ maxWidth: "350px"}} />
            </div>
        </div>
    )
}

export default AboutMe;