import React from 'react';
import './Home.css';
import homeImg from '../../img/home-me.jpg';
import Title from '../Title';
import NavItem from './NavItem';

const Home = () => {
    return(
        <div className="home">
            <div className="home-intro">
                <Title title="Portfolio" />
                <div className="description">
                    <h3>Hi, my name is Izabela.</h3>
                    <p>I would like to design and code some pretty and elegant websites.</p>
                    <p>I would like to be a web developer.</p>
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