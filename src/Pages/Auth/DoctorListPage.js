import React from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Template from '../../Components/Dashboard Page/Template'

export default function DoctorListPage() {
    const navigate = useNavigate();
    const navigateToDoctorDetail = (key) => {
        navigate(`/doctor/${key}`);
        // window.location.reload();
    };

    const content = () => {
        return (
            <div className="doctor-list">
                <Container>
                    <Card>
                        <Card.Body>
                            <Card.Title className='mb-3'>List Doctor</Card.Title>
                            <Form style={{ maxWidth: "22rem" }}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Bidang</Form.Label>
                                    <Form.Select>
                                        <option>Penyakit Dalam</option>
                                        <option>Kulit & Kelamin</option>
                                        <option>Gigi</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Search Doctor</Form.Label>
                                    <Form.Control type="search" placeholder="Enter doctor name" />
                                </Form.Group>

                            </Form>
                        </Card.Body>
                    </Card>

                    <div className="doctor-card-list mt-4">
                        <Row xs={1} md={2} lg={4} className="g-3">
                            {Array.from({ length: 8 }).map((_, idx) => (
                                <Col key={idx}>
                                    <Card className='p-3'
                                        onClick={() => navigateToDoctorDetail(idx)}>
                                        <Card.Body className='p-0 gap-3 d-flex flex-row align-items-center'>
                                            <Card.Img src="./Image/doctor.png" />
                                            <div>
                                                <Card.Title className='fw-bold m-0 fs-6'>Dr. Richald Legirsson</Card.Title>
                                                <Card.Text className=' p-0 m-0'>Penyakit Dalam</Card.Text>
                                                <Card.Text className='p-0 m-0'>Sun - Fri | 7 pm - 12 pm</Card.Text>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <Template content={content()} />
    )
}
