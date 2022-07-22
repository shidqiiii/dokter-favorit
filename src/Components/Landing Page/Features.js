import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { AiOutlineRead } from "react-icons/ai";

export default function Features() {
    return (
        <div id='feature' className="py-5">
            <Container>
                <header className='text-center mb-5'>
                    <Card.Text className='mb-1'>Why you should trust us?</Card.Text>
                    <Card.Title className='my-2 fw-bold fs-2'>Get to Know About Us</Card.Title>
                </header>
                <main>
                    <Row sm={1} md={3} className="gap-4 d-flex justify-content-center align-items-center">
                        {['24/7 Support', 'Private & Secure', 'Million Customers'].map((item, idx) => (
                            <Col md={6} lg={3} key={idx}>
                                <Card className='text-center d-flex justify-content-center align-items-center p-3'>
                                    <div className='icon-feature'>
                                        <AiOutlineRead size={50} className='icon' />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className='fw-bold'>{item}</Card.Title>
                                        <Card.Text>
                                            They come to be part medinik proffesional & diverse health care.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </main>
            </Container>
        </div>
    )
}
