import React, { Component } from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Route } from 'react-router';

import { Grid, Row, Col } from 'react-bootstrap';

import HomePage from '../home';
import AboutPage from '../about';
import ContactPage from '../contact';
import ProjectsPage from '../projects';
import Navbar from '../navbar';

export default class App extends Component {
    addProjects = () =>{
        const projects = [
            'flask-xxl',
            'flask-cms',
            'node-ng',
        ];
        const projectsWeNeed = projects.filter(project =>{
            return this.props.projects.projects.indexOf(project) === -1;
        });
        projectsWeNeed.map(p =>{
            this.props.actions.addProject(p);
        });
    }
    componentWillMount = () =>{            
        this.addProjects();        
    }
    render(){
        return (
            <div>
                <Navbar />
                <Route path='/' exact component={HomePage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/contact' render={props =>(
                    <ContactPage 
                        contactInfo={this.props.contactInfo} 
                        actions={this.props.actions} 
                        {...props} />
                )}/>
                <Route path='/project' render={props =>(
                    <ProjectsPage 
                        projects={this.props.projects} 
                        actions={this.props.actions} 
                        {...props} />
                )} />
            </div>
        );
    }
}
