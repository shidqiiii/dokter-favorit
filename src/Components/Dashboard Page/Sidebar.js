import React from 'react'
import { Card, Col, Nav } from 'react-bootstrap'
import '../../CSS/Dashboard Page/DashboardPage.css';
import { AiOutlineDashboard, AiOutlineSchedule, AiOutlineUnorderedList, AiOutlineHistory } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
export default function Sidebar() {
    return (
        <Col lg={2} className="px-0 sidebar">
            <div className="sidebar-component px-2">
                <Card className='text-center'>
                    <Card.Body>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" className='rounded-circle mb-3' />
                        <Card.Title className='m-0'>Guest 1234</Card.Title>
                        <Card.Text className='m-0'><a href='/login'>Sign out</a></Card.Text>
                    </Card.Body>
                </Card>
                <Nav variant="pills" className="flex-column mt-4 px-3">
                    <Nav.Link href='/dashboard'><AiOutlineDashboard /> Dashboard</Nav.Link>
                    <Nav.Link href='/appointment'><AiOutlineSchedule /> Appointment</Nav.Link>
                    <Nav.Link><MdPayment /> Payment</Nav.Link>
                    <Nav.Link href='/doctor'><AiOutlineUnorderedList /> Doctor List</Nav.Link>
                    <Nav.Link><AiOutlineHistory /> History</Nav.Link>
                </Nav>
            </div>
        </Col>
    )
}
