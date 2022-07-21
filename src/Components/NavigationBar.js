import { Button } from 'react-bootstrap'
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { AiOutlineArrowRight } from "react-icons/ai";


export default function NavigationBar() {
    return (
        <Navbar bg='light' variant='light' expand="lg" sticky="top" className='py-3' >
            <Container>
                <Navbar.Brand href="#" className='fw-bold'>DokterFavorit</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Product</Nav.Link>
                        <Nav.Link href="#">Pricing</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button>Login <AiOutlineArrowRight /></Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}
