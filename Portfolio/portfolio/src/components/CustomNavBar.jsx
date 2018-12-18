import React, { Component } from 'react';
import { Navbar, NavItem, Nav,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./CustomNavBar.css"

class CustomNavbar extends Component {
    render() {
        return (
            <Navbar default collapseOnSelect >
                <Navbar.Header>
                    <Navbar.Brand className="brand">
                        <Link to="/">
                        ░▒▓█ αяυи кαииαтн █▓▒░
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav  pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">Home</NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">Experience</NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/about" to="/about">Education</NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/about" to="/about">Skills</NavItem>
                        <NavItem eventKey={5} componentClass={Link} href="/about" to="/about">About</NavItem>
                        <NavItem eventKey={6} componentClass={Link} href="/about" to="/about">Contact</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNavbar;