import React from 'react';
import Title from '../Title';
import wroclaw from '../../img/about-wroclaw.jpg';
import rheinland from '../../img/about-rheinland.JPG';
import fuerteventura from '../../img/about-fuerteventura.JPG';

const AboutHobby = () => {
    return(
        <div>
            <div className="about-intro">
                <Title title="My hobbies" />
                <h2>Astronomy</h2>
            </div>
            <div className="about-text-photo">
                <div className="about-intro" style={{ paddingTop: 0 }}>
                    <div className="about-description">
                        <p>Astronomy is awesome!</p>
                    </div>
                </div>
                <div className="about-photo">
                    <img src={wroclaw} alt="" />
                </div>
            </div>
            <div className="about-intro">
                <h2>DIY - do it yourself</h2>
            </div>
            <div className="about-text-photo">
                <div className="about-photo">
                    <img src={rheinland} alt="" />
                </div>
                <div className="about-intro" style={{ paddingTop: 0 }}>
                    <div className="about-description">
                        <p>I like create stuffs.</p>
                    </div>
                </div>
            </div>
            <div className="about-intro">
                <h2>Reading</h2>
            </div>
            <div className="about-text-photo">
                <div className="about-intro" style={{ paddingTop: 0 }}>
                    <div className="about-description">
                        <p>Books are imagine trainers. They move into another world.</p>
                        <p>Books liked by me:</p>
                        <ul>
                            <li>Dune - Frank Herbert</li>
                            <li>Millennium Trilogy - Stieg Larsson</li>
                            <li>Bridget Jones Diary - Helen Fielding</li>
                            <li>Master and Margarita - Mikhail Bulgakov</li>
                            <li>One Hundred Years of Solitude - Gabriel Garcia Marquez</li>
                        </ul>
                        <p>Authors liked by me:</p>
                        <p>Stephen King, Dan Brown, Suzanne Collins, Yoyo Moyes, Nicholas Sparks</p>
                    </div>
                </div>
                <div className="about-photo">
                    <img src={fuerteventura} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutHobby;