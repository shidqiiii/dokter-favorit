import React from 'react'
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap'

export default function Faq() {
    return (
        <div id='faq' className="mb-5">
            <Container>
                <header className='text-center mb-5'>
                    <Card.Title className='my-2 fw-bold fs-2'>FAQ</Card.Title>
                    <Card.Text className='mb-1'>What questions are popularly asked?</Card.Text>
                </header>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Col key={idx}>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <div>
                                            <Card.Title>Lorem ipsum dolor</Card.Title>
                                            <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
                                        </div>                                        </Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}
