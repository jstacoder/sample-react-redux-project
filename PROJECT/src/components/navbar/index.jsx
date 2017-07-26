import React, { Component } from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

export default class Navbar extends Component{
    render(){
        return (
            <ul class="list-unstyled">
                <li>
                    <IndexLinkContainer to='/'>
                        <Button>home</Button>
                    </IndexLinkContainer>                    
                </li>
                <li>
                    <LinkContainer to='/about'>
                        <Button>About</Button>
                    </LinkContainer>
                </li>
            </ul>
        );
    }
}