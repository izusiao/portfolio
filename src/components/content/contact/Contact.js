import React from 'react';
import './Contact.css';
import Title from '../Title';


const Contact = () => {
    const style = {
        fontSize: "100px"
    }
    return(
        <div className="contact">
            <div className="contact-title">
                <Title title="Contact" />
            </div>
            <div className="contact-text-photo">
                <div className="contact-intro">
                    <i className="fas fa-envelope" style={style}></i>
                    <div className="contact-description">
                        <p>contact@izabelaozga.com</p>
                    </div>
                </div>
                <div className="contact-intro">
                    <i className="fas fa-mobile-alt" style={style}></i>
                    <div className="contact-description">
                        <p>+49 157 8278 5218</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;