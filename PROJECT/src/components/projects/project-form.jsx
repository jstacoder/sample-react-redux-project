import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

export default class AddProjectForm extends Component {
    handleChange = (e) =>{
        this.props.actions.setProject(e.target.value);
    }
    handleClick = (e) =>{
        e.preventDefault();
        this.props.actions.addProject(this.props.project);
        this.props.actions.resetProject();
    }
    render(){
        const project = this.props.project;
        return (
            <Form>
                <FormGroup>
                    <ControlLabel>text</ControlLabel>
                    <FormControl type='text' value={project} onChange={this.handleChange} />
                </FormGroup>
                <FormControl type='submit' value='submit' onClick={this.handleClick}/>
            </Form>
        );
    }
}
