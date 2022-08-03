import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate();
    const handleButton = () => {
        navigate('/login');
    }


    return (
        <div id='header' className="py-5">
            <Container>
                <Row xs={1} lg={2} className='justify-content-center align-items-center'>
                    <Col md={6} className='d-flex justify-content-center align-items-center'>
                        <Card>
                            <Card.Body>
                                <Card.Title className='fw-bolder fs-1'>Never Hesitate to Consult with Doctor</Card.Title>
                                <Card.Text className='my-3'>
                                    Assertively parallel task team driven delverables with resource-leveling services. Competently transform technically sound strategic theme areas before competitive data.
                                </Card.Text>
                                <Button
                                    onClick={handleButton}>Request an Appoitments</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className='card-image d-flex justify-content-center align-items-center'>
                        <Card.Img variant="top" src="./Image/doctor.png" className='px-5 pt-3' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
