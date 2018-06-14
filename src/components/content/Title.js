import React from 'react';
import './Title.css';

const Title = (props) => {
    const { className, title } = props;
    return(
        <div className="title-h1">
            <h1 className={className}>{title}</h1>
        </div>
    );
}

export default Title;