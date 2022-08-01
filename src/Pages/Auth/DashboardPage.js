import React from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap'
import Template from '../../Components/Dashboard Page/Template'
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


export default function DashboardPage() {
    const navigate = useNavigate();
    const navigateToHistory = () => {
        navigate('/history');
        // window.location.reload();
    };

    const content = () => {
        return (
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title className='mb-3'>Dashboard</Card.Title>

                        <Card.Text>Hello, Welcome back to DoctorFav App.</Card.Text>

                        <Row xs={1} md={3} className="g-4 mb-3">
                            {["Appointment", "Doctor", "History"].map((item, idx) => (
                                <Col key={idx}>
                                    <Card>
                                        <Card.Body className='d-flex align-items-center gap-3'>
                                            <BsFillPersonFill size={50} />
                                            <div>
                                                <Card.Text className='my-0'>See {item}</Card.Text>
                                                <Card.Title>{item}</Card.Title>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        <Card className='text-center' style={{ width: "30rem" }}>
                            <Card.Body>
                                <Card.Title>History Appointment</Card.Title>
                                <Table hover className='text-center' >
                                    <thead>
                                        <tr>
                                            <th>Doctor</th>
                                            <th>Category</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.from({ length: 4 }).map((_, idx) => (
                                            <tr key={idx}>
                                                <td>Dr.Richardlisson</td>
                                                <td>Radiologi</td>
                                                <td>Done</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </Table>
                                <Button className='me-auto' onClick={navigateToHistory} style={{ width: "100%" }}>See Details</Button>
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            </Container>
        )
    }

    return (
        <Template content={content()} />
    )
}
