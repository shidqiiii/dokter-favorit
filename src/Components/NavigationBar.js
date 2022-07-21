import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { AiOutlineArrowRight } from "react-icons/ai";


export default function NavigationBar() {
    const [navbar, setNavbar] = useState(false)

    const changeBackgroundNavbar = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackgroundNavbar)

    return (
        <Navbar expand="lg" sticky="top" className={navbar ? 'active py-3' : 'py-3'} >
            <Container>
                <Navbar.Brand href="#" className='fw-bold'>DoctorFav</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#header">About Us</Nav.Link>
                        <Nav.Link href="#feature">Features</Nav.Link>
                        <Nav.Link href="#faq">FAQs</Nav.Link>
                        <Nav.Link href="#newsletter">Contact</Nav.Link>
                        <Nav.Link href="/login" className='login px-3'>Login <AiOutlineArrowRight /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}
