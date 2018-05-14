import React, { Component } from 'react';
import propTypes from 'prop-types';

class Button extends Component {
    constructor(){
        super();
        this.state = {
            isClicked: false,
        }
        this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
    }
    logFormDataToConsole(event) {
        console.log('Form values', this.props.formValues)
    }
    render(){
        const recipient = `mailto: ${this.props.email}`;
        const subject = '?subject=Interested%20Client';
        const body = `&body=${this.props.formValues.message}`;
        return(
            <a
                href={`${recipient}${subject}${body}`}
                onClick={this.logFormDataToConsole}
                disabled={this.state.isClicked}
            >
                Click to send
            </a>
        );
    }
}
Button.propTypes = {
    email: propTypes.string.isRequired,
    formValues: propTypes.shape({
        name: propTypes.string.isRequired,
        email: propTypes.string.isRequired,
        message: propTypes.string.isRequired
    }).isRequired,
}
export default Button;