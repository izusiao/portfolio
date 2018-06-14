import React from 'react';
import Title from '../Title';

const AboutHobby = () => {
    const style = {
        marginBottom: "20px"
    }
    return(
        <div className="hobbies">
            <div className="about-intro">
                <Title title="My hobbies" />
            </div>
            <div className="about-text-photo">
                <div className="about-intro">
                    <h2 style={style}>Astronomy</h2>
                    <div className="about-description">
                        <p>Astronomy... I loved it when i looked first time into the stars with binoculars. It is just awesome and this view takes the breath away. Now I have got also 12" Newton telescope and could watching the stars all of the night. My favourite objects are the Orion nebula, the Jupiter planet and the open star cluster - the Pleiades (Messier 45). The Saturn planet I've never seen through the telescope and the weather in Germany says: You have to wait for it :(</p>
                    </div>
                </div>
                <div className="about-intro">
                    <h2 style={style}>DIY - do it yourself</h2>
                    <div className="about-description">
                        <p>This is my way to relax. I am totally satisfied with things, which I do myself. Sewing, knitting, crochet are words to describe what i like to do in my free time. I sewed some blouses, knitted a scarf and crocheted a tablecloth. My home library is full of sewing and cloth designing books. I hope one day I design and sew my wedding dress :)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHobby;