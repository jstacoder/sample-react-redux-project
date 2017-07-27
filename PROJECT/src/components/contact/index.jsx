import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { PageHeader } from 'react-bootstrap';
import { Route } from 'react-router';

const ProjectPage = ({match}) =>{
    return (
        <PageHeader>`${match.params.project_id}`</PageHeader>
    );
};

export default class ProjectsPage extends Component {
    render(){
        const projects = ['flask-xxl', 'flask-cms', 'node-ng'];
        return (
            <div>
                <PageHeader>Projects</PageHeader>
                {projects.map(itm =>{
                    return (
                        <LinkContainer to={`${match.url}/${itm}`}>{itm}</LinkContainer>
                    );
                })}
                <Route path=`${match.url}/:project_id` component={ProjectPage} />
                <Route path=`${match.url}/` exact render={match =>(
                    <h3>Please choose a project</h3>
                )}/>
            </div>
        );
    }
}
