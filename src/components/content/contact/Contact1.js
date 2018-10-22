import React, { Component } from 'react';
import './Contact.css';
import Field from './Field';
import Button from './Button';
import Textarea from './Textarea';

class Contact extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.updateField = this.updateField.bind(this);
    }
    updateField(field, value) {
        this.setState({
            [field]: value,
        })
    }
    render(){
        const {name, email, message} = this.state;
        return(
            <div className="contact">
                <div className="container">
                    <Field 
                        onChange={(event) => this.updateField('name', event.target.value)} 
                        value={name}
                        label="Name" />
                    <Field 
                        onChange={(event) => this.updateField('email', event.target.value)} 
                        value={email}
                        label="Email" />
                    <Textarea 
                        onChange={(event) => this.updateField('message', event.target.value)} 
                        value={message}
                        label="Message"/>
                    <Button
                        formValues={this.state}
                        email='ozga.iza@gmail.com'
                    />
                </div>
            </div>
        );
    }
}

export default Contact;