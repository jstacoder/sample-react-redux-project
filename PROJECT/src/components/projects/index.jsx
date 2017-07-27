import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { PageHeader, ListGroup, ListGroupItem, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { Route } from 'react-router';

import ProjectPage from './project-page';
import AddProjectForm from './project-form';

export default class ProjectsPage extends Component {
    render(){
        const projects = this.props.projects.projects;
        const match = this.props.match;
        const clickAddProject = this.clickAddProject;
        return (
            <div>
                <PageHeader>Projects</PageHeader>
                <Row>
                    <Col sm={12}>
                        <Row>
                            {projects.map(itm =>{
                                return (
                                    <Col sm={12} md={4} lg={3} key={itm}>
                                        <LinkContainer to={`${match.url}/detail/${itm}`}>
                                            <Thumbnail alt={itm}>{itm}</Thumbnail>
                                        </LinkContainer>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
                <Route path={`${match.url}/detail/:project_id`} component={ProjectPage} />
                <Route path={`${match.url}/add`} exact render={match =>(
                    <AddProjectForm actions={this.props.actions} project={this.props.projects.project} />
                )}/>
            <Route path={`${match.url}/`} exact render={match =>(
                    <div>
                        <h3>Please choose a project</h3>
                        <LinkContainer to={`/project/add`}>
                            <Button bsSize="sm">add project</Button>
                        </LinkContainer>
                    </div>
                )}/>
            </div>
        );
    }
}
