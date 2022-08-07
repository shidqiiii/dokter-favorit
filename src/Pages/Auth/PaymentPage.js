import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BaseApi } from '../../API/BaseApi';
import Template from '../../Components/Dashboard Page/Template';

export default function PaymentPage() {
    const { key } = useParams();

    const [dataPayment, setDataPayment] = useState({
        payment_type: "",
        bank_transfer: "",
        id_appointment: "",
        total: ""
    })

    const handleChange = (target, value) => {
        setDataPayment({
            ...dataPayment,
            [target]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handlePayment()
    }

    const handleHistoryDetail = async (id) => {
        const data = await BaseApi.GetDetailAppointment(id);
        if (data.status === "SUCCESS") {
            // setHistoryDetail(data.data);
            console.log(data.data);
            setDataPayment({
                ...dataPayment,
                id_appointment: data.data.id,
                total: data.data.total
            });
        }
    };

    const handlePayment = async () => {
        const data = await BaseApi.CreatePayment(dataPayment.payment_type, dataPayment.bank, dataPayment.id_appointment, dataPayment.total);
        if (data.status === "SUCCESS") {
            console.log("sucess");
        } else {
            // setinputError(data.message);
        }
    };

    useEffect(() => {
        handleHistoryDetail(key);
    }, [key]);

    const content = () => {
        return (
            <div className="payment">
                <Container fluid>
                    <Card>
                        <Card.Body>
                            <Card.Title className='mb-3'>Make an Appointment</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Payment Method</Form.Label>
                                    <Form.Select
                                        onChange={(event) => handleChange("payment_type", event.target.value)}
                                        value={dataPayment.payment_type}
                                        required
                                    >
                                        <option value="" defaultValue disabled hidden>Select here</option>
                                        <option value={'Permata'}>Bank Transfer</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Bank</Form.Label>
                                    <Form.Select
                                        onChange={(event) => handleChange("bank_transfer", event.target.value)}
                                        value={dataPayment.bank_transfer}
                                        disabled={dataPayment.payment_type === "" ? true : false}
                                        required
                                    >
                                        <option value="" defaultValue disabled hidden>Select here</option>
                                        <option value={'Permata'}>Permata</option>
                                        <option value={'BCA'}>BCA</option>
                                        <option value={'Mandiri'}>Mandiri</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Biaya</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={"Rp " + dataPayment.total?.toLocaleString('id-ID') || ''}
                                        disabled />
                                </Form.Group>

                                <Button variant="primary" type="submit">Lets Pay!</Button>
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
