import React from 'react'
import { Card, Container, Table } from 'react-bootstrap'
import Template from '../../Components/Dashboard Page/Template'

export default function DoctorDetailPage() {
    const content = () => {
        return (
            <div className="doctor-detail">
                <Container>
                    <Card>
                        <Card.Body>
                            <Card.Title>Profile Doctor</Card.Title>
                            <div className="doctor-content d-flex align-items-center p-4 gap-4">
                                <Card.Img src="../Image/doctor.png" />
                                <div>
                                    <Card.Title className='fw-bold fs-4'>Dr. Richald Legirsson</Card.Title>
                                    <Card.Text>Dr. Richald Legirsson merupakan spesialist Jantung dan Paru</Card.Text>
                                    <Card.Title className='fs-6'>Whatsapp: 081X XXX XXX</Card.Title>
                                    <Card.Title className='fs-6'>Email: email@email.com</Card.Title>
                                </div>
                            </div>
                            <div className="doctor-schedule">
                                <Card style={{ width: "30rem" }}>
                                    <Card.Body>
                                        <Card.Title className='fs-6'>Schedule Doctor</Card.Title>
                                        <Table striped bordered hover size="sm">
                                            <thead>
                                                <tr>
                                                    <th>No.</th>
                                                    <th>Date</th>
                                                    <th>Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>25 January 2022</td>
                                                    <td>2 PM - 7 PM</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>27 January 2022</td>
                                                    <td>2 PM - 7 PM</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }

    return (
        <Template content={content()} />
    )
}
