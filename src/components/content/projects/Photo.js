import React from 'react';
import './Photo.css';

const Photo = (props) => {
    const { photo, title, url } = props;
    return (
        <a className="link" href={url} target="blank">
            <div className="nav-item">{title}</div>
            <div className="projects-photo">
                <img src={photo} alt="" />
                <div className="overlay"><i className="fas fa-external-link-alt icon"></i></div>
            </div>
        </a>
    );
}

export default Photo;