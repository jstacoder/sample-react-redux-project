import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

export default class AboutPage extends Component {
    render(){
        return (
            <div>
            <PageHeader>
                About
            </PageHeader>
            <p>This page is all about me</p>
            </div>
        );
    }
}