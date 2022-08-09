import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { BaseApi } from '../../API/BaseApi';
import Template from '../../Components/Dashboard Page/Template'

export default function PaymentDetailPage() {
    const { key } = useParams();

    const [detailPayment, setDetailPayment] = useState(null)

    const handleDoctorsPerDepartments = async (id) => {
        const data = await BaseApi.GetDetailPayment(id);
        if (data.status === "SUCCESS") {
            const result = JSON.parse(data.data.response_midtrans)
            setDetailPayment(result);
        } else if (data.error === "FAIL") {
            setDetailPayment(null)
        }
    };

    useEffect(() => {
        handleDoctorsPerDepartments(key)
    }, [])

    const paymentDetail = () => {
        let result
        if (detailPayment !== null) {
            result = (<Card>
                <Card.Body>
                    <Card.Title className='fs-6'>merchant_id: {detailPayment.merchant_id}</Card.Title>
                    <Card.Text>payment_type: {detailPayment.payment_type}</Card.Text>
                    <Card.Text>permata_va_number: {detailPayment.permata_va_number}</Card.Text>
                    <Card.Text>transaction_id: {detailPayment.transaction_id}</Card.Text>
                </Card.Body>
            </Card>)
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
