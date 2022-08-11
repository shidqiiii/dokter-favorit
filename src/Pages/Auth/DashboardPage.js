import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Template from '../../Components/Dashboard Page/Template'
import { useNavigate } from 'react-router-dom';
import { RiHistoryFill, RiHospitalLine, RiPencilLine } from 'react-icons/ri';


export default function DashboardPage() {
    const navigate = useNavigate();
    const navigateToPage = (page) => {
        navigate(`/${page}`);
    };

    const content = () => {
        return (
            <Container fluid>
                <Card>
                    <Card.Body>
                        <Card.Title className='mb-3'>Dashboard</Card.Title>

                        <Card.Text>Hello, Welcome back to DoctorFav App.</Card.Text>

                        <Row sm={1} md={3} className="g-4 mb-3">
                            <Col>
                                <Card onClick={() => navigateToPage("appointment")} style={{ cursor: "pointer" }}>
                                    <Card.Body className='d-flex align-items-center gap-3'>
                                        <RiPencilLine size={50} />
                                        <div>
                                            <Card.Text className='my-0'>Make an appointment</Card.Text>
                                            <Card.Title>Appointment</Card.Title>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card onClick={() => navigateToPage("doctor")} style={{ cursor: "pointer" }}>
                                    <Card.Body className='d-flex align-items-center gap-3'>
                                        <RiHospitalLine size={50} />
                                        <div>
                                            <Card.Text className='my-0'>See Doctor List</Card.Text>
                                            <Card.Title>Doctor List</Card.Title>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card onClick={() => navigateToPage("appointment")} style={{ cursor: "pointer" }}>
                                    <Card.Body className='d-flex align-items-center gap-3'>
                                        <RiHistoryFill size={50} />
                                        <div>
                                            <Card.Text className='my-0'>See History List</Card.Text>
                                            <Card.Title>History List</Card.Title>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        )
    }

    return (
        <Template content={content()} />
    )
}
