import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'

export default function FormTemplate(props) {
    return (
        <Card className='mx-5 shadow-lg'>
            <Row className='d-flex align-items-center justify-content-center py-5'>
                <Col sm={10} lg={5} className='my-auto px-5'>
                    <Form onSubmit={props.handleSubmit}>
                        <header className='mb-3 text-center'>
                            <Card.Title className='fw-bold fs-2 my-0'>
                                {props.title}
                            </Card.Title>
                            <Card.Text>
                                {props.heading}
                            </Card.Text>
                        </header>

                        {props.handleForm}
                    </Form >
                </Col>
                <Col sm={10} lg={5} className='d-flex align-items-center justify-content-center'>
                    <Card.Img variant="top" src="./Image/login-illustrator.png" />
                </Col>
            </Row>
        </Card>
    )
}
