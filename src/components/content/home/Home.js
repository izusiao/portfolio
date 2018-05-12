import React from 'react';
import './Home.css';
import homeImg from '../../img/home-me.jpg';
import NavItem from './NavItem';

const Home = () => {
    return(
        <div className="home">
            <div className="home-intro">
                <div className="title-h1">
                    <h1>Portfolio</h1>
                </div>
                <div className="description">
                    <h3>Hi, my name is Izabela.</h3>
                    <p>I would like to design and code some pretty and elegant websites.</p>
                    <p>I would like to be a web developer.</p>
                </div>
                <div className="navigation">
                    <NavItem name="About me"/>
                    <NavItem name="Projects"/>
                    <NavItem name="Contact"/>
                </div>
            </div>
            <div className="home-photo">
                <img src={homeImg} alt="" />
            </div>
        </div>
    )
}

export default Home;