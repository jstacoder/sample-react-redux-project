import React, { Component } from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Route } from 'react-router';
import HomePage from '../home';
import AboutPage from '../about';
import ContactPage from '../contact';
import ProjectsPage from '../projects';
import Navbar from '../navbar';

export default class App extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <Route path='/' exact component={HomePage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/contact' render={props =>(
                    <ContactPage contactInfo={this.props.contactInfo} actions={this.props.actions} />
                )} />
                <Route path='/project' component={ProjectsPage} />                
            </div>
        );
    }
}