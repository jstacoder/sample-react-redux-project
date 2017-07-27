import React, { Component } from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Route } from 'react-router';

import { Grid, Row, Col } from 'react-bootstrap';

import HomePage from '../home';
import AboutPage from '../about';
import ProjectsPage from '../projects';
import Navbar from '../navbar';

export default class App extends Component {
    addProjects = () =>{
        const projects = [
            'flask-xxl',
            'flask-cms',
            'node-ng',
        ];
        projects.map(p =>{
            this.props.actions.addProject(p);
        });
    }
    componentDidMount = () =>{
        console.log('adding projects');
        console.log("not done", this.props.projects.projects)
        this.addProjects();
        console.log("done", this.props.projects.projects)
    }
    render(){
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Navbar />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Route path='/' exact component={HomePage} />
                        <Route path='/about' component={AboutPage} />
                        <Route path='/contact' component={HomePage} />
                        <Route path='/project' render={props =>(
                            <ProjectsPage projects={this.props.projects} actions={this.props.actions} {...props} />
                        )} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
