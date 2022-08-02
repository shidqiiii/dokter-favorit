import React, { useEffect, useState } from 'react'
import { Card, Container, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { BaseApi } from '../../API/BaseApi';
import Template from '../../Components/Dashboard Page/Template'

export default function DoctorDetailPage() {
    const { key } = useParams();

    const handleDoctorDetail = async (id) => {
        const data = await BaseApi.GetDetailDoctor(id);
        if (data.error === "SUCCESS") {
            setDoctorDetail(data.data[0]);
        }
    };

    const [doctorDetail, setDoctorDetail] = useState([]);

    useEffect(() => {
        handleDoctorDetail(key);
    }, [key]);


    const content = () => {
        return (
            <div className="doctor-detail">
                {console.log(doctorDetail)}
                <Container>
                    <Card>
                        <Card.Body>
                            <Card.Title>Profile Doctor</Card.Title>
                            <div className="doctor-content d-flex align-items-center p-4 gap-4">
                                <Card.Img src="../Image/doctor.png" />
                                <div>
                                    <Card.Title className='fw-bold fs-4'>Dr. {doctorDetail.name}</Card.Title>
                                    <Card.Text>{doctorDetail.description}</Card.Text>
                                    <Card.Text>Nomer Telepon: {doctorDetail.phone_number}</Card.Text>
                                    <Card.Text>Email: {doctorDetail.email}</Card.Text>
                                    <Card.Text>Biaya: {doctorDetail.price_hour}</Card.Text>
                                </div>
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
