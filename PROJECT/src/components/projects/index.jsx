import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { PageHeader, ListGroup, ListGroupItem, Row, Col, Thumbnail, Button, Well } from 'react-bootstrap';
import { Route } from 'react-router';

import ProjectPage from './project-page';
import AddProjectForm from './project-form';

export default class ProjectsPage extends Component {
    hasProject = (project) =>{
        const projects = this.props.projects.projects;
        let found = false;
        projects.map(p =>{        
            found = (p === project);
        });
        return found;
    }
    render(){
        const projects = this.props.projects.projects;
        const match = this.props.match;
        const clickAddProject = this.clickAddProject;
        const wellStyle = {
            cursor: 'pointer',
        };
        return (
            <div>
                <PageHeader>Projects</PageHeader>
                <Row>
                    <Col sm={12} md={4} mdPush={8} lgPush={9} lg={3}>
                        <Row>
                            {projects.map(itm =>{
                                return (
                                    <Col xs={6} sm={3} md={6} lg={6} key={itm}>
                                        <LinkContainer  style={wellStyle} to={`${match.url}/detail/${itm}`}>
                                            <Well bsSize="lg">{itm}</Well>
                                        </LinkContainer>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                    <Col xs={12} mdPull={3} md={8}  >                            
                        <Route path={`${match.url}/detail/:project_id`} render={props =>(
                            <ProjectPage 
                                actions={this.props.actions} 
                                projects={projects}
                                {...props} />
                        )} />
                        <Route path={`${match.url}/add`} exact render={match =>(
                            <AddProjectForm 
                                actions={this.props.actions} 
                                project={this.props.projects.project} 
                                hasProject={this.hasProject}
                            />
                        )}/>        
                        <Route path={`${match.url}/`} exact render={match =>(
                                <div>
                                    <h3>Please choose a project</h3>
                                    <LinkContainer to={`/project/add`}>
                                        <Button bsSize="sm">add project</Button>
                                    </LinkContainer>
                                </div>
                            )}/>
                    </Col>
                </Row>
            </div>
        );
    }
}
