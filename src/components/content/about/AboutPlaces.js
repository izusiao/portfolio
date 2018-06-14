import React from 'react';
import Title from '../Title';
import wroclaw from '../../img/about-wroclaw.jpg';
import rheinland from '../../img/about-rheinland.JPG';
import fuerteventura from '../../img/about-fuerteventura.JPG';

const AboutPlaces = () => {
    return(
        <div className="about-places">
            <div className="about-intro">
                <Title title="My places" />
                <h2>Wrocław</h2>
            </div>
            <div className="about-text-photo">
                <div className="about-photo">
                    <img src={wroclaw} alt="" />
                </div>
                <div className="about-intro" style={{ paddingTop: 0 }}>
                    <div className="about-description">
                        <p><b>Wrocław</b> is the one of the most beautiful cities in Poland, my birth place. It lies at the Oder river, is capital of the Lower Silesia and has over 600 000 inhabitants.</p>
                        <p><b>Favorite places in Wrocław:</b></p>
                        <ul>
                            <li><a href="https://visitwroclaw.eu/en/place/ostrow-tumski-en" target="blank">Ostrów Tumski</a></li>
                            <li><a href="https://visitwroclaw.eu/en/place/rynek-wroclaw-en" target="blank">Rynek</a></li>
                            <li><a href="https://visitwroclaw.eu/en/place/wroclaw-multimedia-fountain" target="blank">Pergola with Multimedia Fountain</a></li>
                            <li><a href="https://visitwroclaw.eu/en/place/park-szczytnicki" target="blank">Park Szczytnicki</a></li>
                            <li><a href="https://visitwroclaw.eu/en/place/pod-latarniami-beerhouse" target="blank">Pub "Pod latarniami"</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="about-intro">
                <h2>Rheinland</h2>
            </div>
            <div className="about-text-photo">
                <div className="about-intro" style={{ paddingTop: 0 }}>
                    <div className="about-description">
                        <p>Here is my living place, where the time is going slowly and the views are beatiful... <b>The Rheinland</b> is an area of Western Germany along the Rhein river.</p>
                        <p><b>Favorite places:</b></p>
                        <ul>
                            <li><a href="https://www.erpelerley-bergesruh.de/" target="blank">Erpeler Ley</a></li>
                            <li><a href="http://www.unkel-kulturstadt.de/unkel/" target="blank">Unkel</a></li>
                            <li><a href="http://www.rheinair.eu/" target="blank">Rhein Air Biergarten</a></li>
                            <li><a href="https://de-de.facebook.com/Fra-Bartolo-Restaurant-Caf%C3%A9-Bar-161126427260776/" target="blank">Fra Bartolo Restaurant</a></li>
                        </ul>
                    </div>
                </div>
                <div className="about-photo">
                    <img src={rheinland} alt="" />
                </div>
            </div>
            <div className="about-intro">
                <h2>Fuerteventura</h2>
            </div>
            <div className="about-text-photo">
                <div className="about-photo">
                    <img src={fuerteventura} alt="" />
                </div>
                <div className="about-intro" style={{ paddingTop: 0 }}>
                    <div className="about-description">
                        <p>My first holiday destination in the Athantic Ocean. <b>Fuerteventura</b> is the second largest of the Canary Islands with the capital in Puerto del Rosario.</p>
                        <p><b>Favorite places:</b></p>
                        <ul>
                            <li><a href="https://www.hellocanaryislands.com/beaches/fuerteventura/costa-calma-beach/" target="blank">Costa Calma</a></li>
                            <li><a href="https://www.hellocanaryislands.com/beaches/fuerteventura/morro-jable-beach/" target="blank">Moro Jable</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPlaces;