import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import '../../CSS/Dashboard Page/DashboardPage.css';
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai";
import Sidebar from '../../Components/Dashboard Page/Sidebar';

export default function Template(props) {
    return (
        <div className='dashboard'>
            <Row>
                <Sidebar />
                <Col>
                    <Navbar bg="light" expand="lg" className='px-4 py-3 justify-content-between'>
                        <Nav.Link><AiOutlineMenu size={20} /></Nav.Link>
                        <Nav.Link><AiOutlineBell size={20} /></Nav.Link>
                    </Navbar>
                    <div className="content pt-3 ps-4">
                        {props.content}
                    </div>
                </Col>
            </Row>
        </div>
    )
}
