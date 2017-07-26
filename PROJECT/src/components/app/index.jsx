import React, { Component } from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Route } from 'react-router';
import HomePage from '../home';
import AboutPage from '../about';
import Navbar from '../navbar';

export default class App extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <Route path='/' exact component={HomePage} />
                <Route path='/about' component={AboutPage} />
            </div>
        );
    }
}