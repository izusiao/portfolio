import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";
import './ScrollUp.css';

class ScrollUp extends Component {
    render(){
        return (
            <div>
                <ScrollUpButton ContainerClassName="my-scroll-button"/>
            </div>
        );
    }
}

export default ScrollUp;