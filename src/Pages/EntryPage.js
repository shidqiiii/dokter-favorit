import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'

export default function EntryPage() {
    return (
        <div className="entry my-5">
            <Container className='my-5'>
                <Card className='p-5 shadow-lg'>
                    <Row className='d-flex align-items-center justify-content-center py-5'>
                        <Col sm={10} lg={5} className='my-auto px-5'>
                            {/* <Form>
                                <header className='mb-3 text-center'>
                                    <Card.Title className='fw-bold fs-2 my-0'>Welcome back</Card.Title>
                                    <Card.Text>Welcome back! Please enter your details.</Card.Text>
                                </header>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Password</Form.Label>
                                    <Form.Control type="password" placeholder="*******" />
                                </Form.Group>
                                <Form.Group className="mt-4 mb-3">
                                    <Form.Control type="submit" value='Sign in' />
                                </Form.Group>
                                <Card.Text className='text-center'>Don't have an account? <span>Sign up</span></Card.Text>
                            </Form> */}
                            <Form>
                                <header className='mb-3 text-center'>
                                    <Card.Title className='fw-bold fs-2 my-0'>Create an account</Card.Title>
                                    <Card.Text>Let's get started.</Card.Text>
                                </header>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your Full Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Email Address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your Email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Password</Form.Label>
                                    <Form.Control type="password" placeholder="*******" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>User</Form.Label>
                                    <Form.Select>
                                        <option>Pasien</option>
                                        <option>Doctor</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Departement</Form.Label>
                                    <Form.Select>
                                        <option>KSM Dermatologi dan Venereologi</option>
                                        <option>Orthopaedi dan Traumatologi</option>
                                        <option>Ilmu Kebidanan dan Kandungan</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mt-4 mb-3">
                                    <Form.Control type="submit" value='Create account' />
                                </Form.Group>
                                <Card.Text className='text-center'>Already have an account? <span>Sign in</span></Card.Text>
                            </Form>
                        </Col>
                        <Col sm={10} lg={5} className='d-flex align-items-center justify-content-center'>
                            <Card.Img variant="top" src="./Image/login-illustrator.png" />
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}
