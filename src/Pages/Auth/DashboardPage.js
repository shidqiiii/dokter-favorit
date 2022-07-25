import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Template from '../../Components/Dashboard Page/Template'

export default function DashboardPage() {
    const content = () => {
        return (
            <Container fluid>
                <Card className='text-center'>
                    <Card.Body>
                        <Card.Title>Welcome Back!</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Make an Appointment</Button>
                    </Card.Body>
                </Card>
                <Row className='gap-3 g-3'>
                    <Col>
                        <Card className='text-center'>
                            <Card.Body>
                                <Card.Title>Doctor List</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Doctor List</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='text-center'>
                            <Card.Body>
                                <Card.Title>Appointment</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Your appointment</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <Template content={content()} />
    )
}
