import React, { Component } from 'react';
import { PageHeader, Well } from 'react-bootstrap';

export default class HomePage extends Component {
    render(){
        return (
            <div>
                <PageHeader>
                    Home
                </PageHeader>
                <Well>
                        <h2>My Home Page!!</h2>
                </Well>
            </div>
        );
    }
}