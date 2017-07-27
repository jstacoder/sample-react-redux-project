import React, { Component } from 'react';
import { PageHeader, Panel, Form, FormControl, ControlLabel, Checkbox, FormGroup, Button } from 'react-bootstrap';

export default class ContactPage extends Component {
    contactChange = (event, prop) =>{
        event.preventDefault();
        const funcs = {
            name: 'setContactInfoName',
            age: 'setContactInfoAge',
            email: 'setContactInfoEmail',
            comment: 'setContactInfoComment',
        };
        this.props.actions[funcs[prop]](event.target.value);
    }
    render(){
        return(
            <div>        
                <PageHeader>Contact Me</PageHeader>
                <Form action="#">
                    <FormGroup>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type='text' value={this.props.contactInfo.name} onChange={e =>{this.contactChange(e, 'name')}} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Email Address</ControlLabel>
                        <FormControl type='text' value={this.props.contactInfo.email} onChange={e =>{this.contactChange(e, 'email')}} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>age</ControlLabel>
                        <FormControl type='text' value={this.props.contactInfo.age} onChange={e =>{this.contactChange(e, 'age')}} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>comment</ControlLabel>
                        <FormControl type='textArea' value={this.props.contactInfo.comment} onChange={e =>{this.contactChange(e, 'comment')}} />
                    </FormGroup>
                    <Button bsStyle="primary" onClick={this.props.actions.resetContactInfo}>Submit</Button>
                </Form>
            </div>            
        );
    }
}
