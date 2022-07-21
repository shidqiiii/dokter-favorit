import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { AiOutlineRead } from "react-icons/ai";

export default function LandingPage() {
    return (
        <>
            <NavigationBar />

            <Container>

                {/* Header */}
                <div className="header py-5">
                    <Row xs={1} lg={2} className='justify-content-center align-items-center'>
                        <Col md={5} className='d-flex justify-content-center align-items-center'>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='fw-bolder fs-1'>Never Hesitate to Consult with Doctor</Card.Title>
                                    <Card.Text className='my-3'>
                                        Assertively parallel task team driven delverables with resource-leveling services. Competently transform technically sound strategic theme areas before competitive data.
                                    </Card.Text>
                                    <Button variant="primary">Book Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={5} className='d-flex justify-content-center align-items-center'>
                            <Card.Img variant="top" src="./Image/doctor.png" />
                        </Col>
                    </Row>
                </div>

                {/* Feature */}
                <div className="feature">
                    <header className='text-center mb-5'>
                        <Card.Text className='my-1'>Why you should trust us?</Card.Text>
                        <Card.Title className='my-2 fw-bold fs-2'>Get to Know About Us</Card.Title>
                    </header>
                    <main>
                        <Row sm={1} md={3} className="gap-4 d-flex justify-content-center align-items-center">
                            {['24/7 Support', 'Private & Secure', 'Million Customers'].map((item) => (
                                <Col md={4} lg={3}>
                                    <Card className='text-center d-flex justify-content-center align-items-center p-3'>
                                        <div className='icon-feature'>
                                            <AiOutlineRead size={60} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title className='fw-bold'>{item}</Card.Title>
                                            <Card.Text>
                                                Assertively parallel task team driven delverables with resource-leveling services.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </main>
                </div>

            </Container>
        </>
    )
}
