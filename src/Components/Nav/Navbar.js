import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import '../../App.css';

const Navs = () => {
    return (
        <Navbar className="navbar fixed-top" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Products</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mx-5">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#products">Products</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navs;
