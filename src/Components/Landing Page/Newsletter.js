import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

export default function Newsletter() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div id='newsletter' className="py-5">
            <Container >
                <Row xs={1} lg={2} className='justify-content-center align-items-center'>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title className='fw-bolder fs-3'>Get In Touch</Card.Title>
                                <Card.Text >
                                    The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Form
                            className="d-flex justify-content-center"
                            onSubmit={handleSubmit}>
                            <Form.Control type="search" placeholder="Your Email" />
                            <Button type='submit'>Subscribe</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
