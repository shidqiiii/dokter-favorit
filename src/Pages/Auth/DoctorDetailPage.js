import React, { useEffect, useState } from 'react'
import { Card, Container, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { BaseApi } from '../../API/BaseApi';
import Template from '../../Components/Dashboard Page/Template'
import { connect } from "react-redux";

function DoctorDetailPage(props) {
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
                <Container fluid>
                    <Card>
                        <Card.Body>
                            <Card.Title>Profile Doctor</Card.Title>
                            <div className="doctor-content d-flex align-items-center p-4 gap-4">
                                <Card.Img src="../Image/doctor.png" />
                                <div>
                                    <Card.Title className='fw-bold fs-4'>Dr. {doctorDetail.name}</Card.Title>
                                    <Card.Text>{doctorDetail.description}</Card.Text>
                                </div>
                            </div>

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
                                        <td>Department</td>
                                        <td> Department {props.departmentsReducer.filter(e => e.id === doctorDetail.id_department).map(e => e.name)
                                        }</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Email</td>
                                        <td>{doctorDetail.email}</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Phone Number</td>
                                        <td>{doctorDetail.phone_number}</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Price per Hour</td>
                                        <td>IDR {doctorDetail.price_hour?.toLocaleString('id-ID') || ''}</td>
                                    </tr>
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

const mapStateToProps = state => ({
    departmentsReducer: state.departmentsReducer
});

export default connect(mapStateToProps)(DoctorDetailPage);
