import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import Template from '../../Components/Dashboard Page/Template'

export default function AppointmentPage() {
    const content = () => {
        return (
            <div className="appointment">
                <Container>
                    <Card>
                        <Card.Body>
                            <Card.Title className='mb-3'>Make an Appointment</Card.Title>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kategori</Form.Label>
                                    <Form.Select>
                                        <option>Penyakit Dalam</option>
                                        <option>Kulit & Kelamin</option>
                                        <option>Gigi</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Doctor</Form.Label>
                                    <Form.Select>
                                        <option>Dr. Richardlisson</option>
                                        <option>Dr. Namika</option>
                                        <option>Dr. Albert Jaya</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Pilih Tanggal</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Pilih Jam</Form.Label>
                                    <Form.Control type="time" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Durasi</Form.Label>
                                    <Form.Control type="time" />
                                </Form.Group>

                                <Button variant="primary" type="submit">Next Step</Button>
                            </Form>
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
