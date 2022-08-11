import React, { useEffect, useState } from 'react'
import { Card, Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BaseApi } from '../../API/BaseApi';
import Template from '../../Components/Dashboard Page/Template'

export default function PaymentDetailPage() {
    const { key } = useParams();

    const [detailPayment, setDetailPayment] = useState(null)

    const handlePaymentDetail = async (id) => {
        const data = await BaseApi.GetDetailPayment(id);
        if (data.status === "SUCCESS") {
            const result = JSON.parse(data.data.response_midtrans)
            setDetailPayment(result);
        } else if (data.error === "FAIL") {
            setDetailPayment(null)
        }
    };

    useEffect(() => {
        handlePaymentDetail(key)
    }, [])

    const paymentDetail = () => {
        let result
        if (detailPayment !== null) {
            result = (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th colSpan={2} className='text-center'>Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Payment Type</td>
                            <td>{detailPayment.payment_type}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Transaction Id</td>
                            <td>{detailPayment.transaction_id}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Merchant Id</td>
                            <td>{detailPayment.merchant_id}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Transaction Time</td>
                            <td>{detailPayment.transaction_time}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Total</td>
                            <td>IDR {detailPayment.gross_amount}</td>
                        </tr>
                    </tbody>
                </Table>
            )
        } else {
            result = <Card.Text>Tidak ada data</Card.Text>
        }

        return result
    }


    const content = () => {
        console.log(detailPayment);
        return (
            <Container fluid>
                <Card>
                    <Card.Body>
                        <Card.Title className='mb-3'>Payment Detail</Card.Title>
                        {paymentDetail()}
                    </Card.Body>
                </Card>
            </Container>
        )
    }

    return (
        <Template content={content()} />
    )
}
