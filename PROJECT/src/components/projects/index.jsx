import React, { Component } from 'react';
import { Route } from 'react-router';
import { PageHeader, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const ProjectPage = ({match}) =>{
    return (
        <div> 
            <h2>{match.params.project_id}</h2>
            
        </div>
    );
};

export default class ProjectsPage extends Component {
    render(){
        return(
            <div>
            <PageHeader>Projects</PageHeader>
            <LinkContainer to='/project/proj1'>
                <Button bsSize="sm">Project 1</Button>
            </LinkContainer>
            <LinkContainer to='/project/proj2'>
                <Button bsSize="sm">Project 2</Button>
            </LinkContainer>
            <LinkContainer to='/project/proj3'>
                <Button bsSize="sm">Project 3</Button>
            </LinkContainer>
            <LinkContainer to='/project/proj4'>
                <Button bsSize="sm">Project 4</Button>
            </LinkContainer>
            <Route path='/project/:project_id' component={ProjectPage} />                
            <Route path='/project' exact render={props =>(
                <p>Select a project</p>
            )} />
            </div>
        );
    }
}