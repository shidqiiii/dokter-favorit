import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Template from '../../Components/Dashboard Page/Template'
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


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

                        <Row xs={1} md={3} className="g-4 mb-3">
                            {["Appointment", "Doctor", "History"].map((item, idx) => (
                                <Col key={idx}>
                                    <Card onClick={() => navigateToPage(item)} style={{ cursor: "pointer" }}>
                                        <Card.Body className='d-flex align-items-center gap-3'>
                                            <BsFillPersonFill size={50} />
                                            <div>
                                                <Card.Text className='my-0'>See {item}</Card.Text>
                                                <Card.Title>{item}</Card.Title>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
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
