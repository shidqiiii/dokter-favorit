import React from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import Template from '../../Components/Dashboard Page/Template'

export default function HistoryPage() {
    const content = () => {
        return (
            <div className="history">
                <Container>
                    <Card>
                        <Card.Body>
                            <Card.Title>History</Card.Title>
                            <Table hover className='text-center'>
                                <thead>
                                    <tr>
                                        <th>Doctor</th>
                                        <th>Category</th>
                                        <th>Status</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 4 }).map((_, idx) => (
                                        <tr key={idx}>
                                            <td>
                                                <div className='d-flex align-items-center justify-content-center gap-4'>
                                                    <Card.Img src="../Image/doctor.png" />
                                                    <Card.Text>Dr.Richardlisson</Card.Text>
                                                </div>
                                            </td>
                                            <td>Radiologi</td>
                                            <td>Done</td>
                                            <td>Rp. 250.000</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
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
