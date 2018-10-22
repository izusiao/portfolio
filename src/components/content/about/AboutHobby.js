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
                        <p><b>Astronomy</b>... I loved it when i looked first time into the stars with binoculars <b>Nikon Action EX 10x50</b> (Christmas <i class="fas fa-gift"></i> from my boyfriend). It is just awesome and this view takes the breath away. Now I have got also <b>12" Newton Telescope</b> (Birthday <i class="fas fa-gift"></i> from my boyfriend) and could watching stars all of the night. My favourite objects are the <b>Orion Nebula</b>, the <b>Jupiter Planet</b> and the open star cluster - <b>Pleiades</b> (Messier 45). The most impressive <b>Saturn Planet</b> I've never seen through the telescope, because the weather in Germany says: Forget it! <i class="far fa-frown"></i> other for any another reasons...</p>    
                    </div>
                </div>
                <div className="about-intro">
                    <h2 style={style}>DIY - do it yourself</h2>
                    <div className="about-description">
                        <p>This is my way to <b>relax</b>. I am totally satisfied with things, which I <b>do myself</b>. <b>Sewing, knitting, crochet</b> are words to describe what i like to do in my free time. I sewed some blouses, knitted a scarf and crocheted a tablecloth. My home library is full of sewing and cloth designing books. I hope one day I <b>design</b> and sew my wedding dress <i class="far fa-smile"></i></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHobby;