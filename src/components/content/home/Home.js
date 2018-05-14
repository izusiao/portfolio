import React from 'react';
import './Home.css';
import homeImg from '../../img/home-me.png';
import rose from '../../img/rose2.jpg';
import Title from '../Title';
import NavItem from './NavItem';

const Home = () => {
    const style = {
        fontWeight: "700"
    }
    return(
        <div className="home">
            <div className="home-intro">
                <Title title="Portfolio" />
                <div className="description">
                    <h3>Hello, my name is Izabela.</h3>
                    <p>My dream is... designing and creating some pretty and elegant websites.</p>
                    <p>My purpose is... to be a <span style={style}>web developer</span>.</p>
                    <img src={rose} alt="" />
                </div>
                <div className="navigation">
                    <NavItem link="about" name="About me"/>
                    <NavItem link="projects" name="Projects"/>
                    <NavItem link="contact" name="Contact"/>
                </div>
            </div>
            <div className="home-photo">
                <img src={homeImg} alt="" />
            </div>
        </div>
    )
}

export default Home;