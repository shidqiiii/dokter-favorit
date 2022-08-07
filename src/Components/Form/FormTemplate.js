import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function FormTemplate(props) {
    return (
        <Card className='mx-5 shadow-lg'>
            <Row className='d-flex align-items-center justify-content-center py-5'>
                <Col sm={10} lg={5} className='my-auto px-5'>
                    {props.children}
                </Col>
                <Col sm={10} lg={5} className='d-flex align-items-center justify-content-center'>
                    <Card.Img variant="top" src="./Image/login-illustrator.png" />
                </Col>
            </Row>
        </Card>
    )
}
