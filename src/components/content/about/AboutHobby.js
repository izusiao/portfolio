import React from 'react';
import Title from '../Title';

const AboutHobby = () => {
    return(
        <div>
            <div className="about-intro">
                <Title title="My hobbies" />
            </div>
            <div className="about-text-photo">
                <div className="about-intro">
                    <h3>Astronomy</h3>
                    <div className="about-description">
                        <p>Astronomy is awesome!</p>
                    </div>
                </div>
                <div className="about-intro">
                    <h3>DIY - do it yourself</h3>
                    <div className="about-description">
                        <p>I like create stuffs.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHobby;