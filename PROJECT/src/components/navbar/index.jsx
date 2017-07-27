import React, { Component } from 'react';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';
import { Button, Nav, NavItem } from 'react-bootstrap';

export default class Navbar extends Component{
    render(){
        return (
            <Nav bsStyle="pills">
                <IndexLinkContainer to='/'>
                    <NavItem>Home</NavItem>
                </IndexLinkContainer>                    
                <LinkContainer to='/about'>
                    <NavItem>About Me</NavItem>
                </LinkContainer>
                <LinkContainer to='/contact'>
                    <NavItem>Contact Me</NavItem>
                </LinkContainer>
                <LinkContainer to='/project'>
                    <NavItem>Projects</NavItem>
                </LinkContainer>
            </Nav>
        );
    }
}
