import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { AiOutlineCodepen } from "react-icons/ai";

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

            </Container>
        </>
    )
}
