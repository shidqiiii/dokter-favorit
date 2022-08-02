import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import Template from '../../Components/Dashboard Page/Template'
import { connect } from "react-redux";
import { BaseApi } from '../../API/BaseApi';

function AppointmentPage(props) {
    const [inputData, setInputData] = useState({
        start: "",
        end: "",
        id_departement: "",
        id_doctor: "",
        id_pasien: "",
        catatan_keluhan: "",
        total: ""
    });

    const [inputError, setinputError] = useState("")

    // HandleChange
    const handleChange = (target, value) => {
        setInputData({
            ...inputData,
            [target]: value
        });
        setinputError("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [DoctorList, setDoctorList] = useState([]);

    const handleDoctorsPerDepartments = async (id) => {
        const data = await BaseApi.GetAllDoctors(id);
        if (data.error === "SUCCESS") {
            setDoctorList(data.data);
        } else if (data.error === "FAIL") {
            setDoctorList([])
        }
    };

    useEffect(() => {
        handleDoctorsPerDepartments(inputData.id_departement);
    }, [inputData.id_departement])

    const content = () => {
        return (
            <div className="appointment">
                <Container>
                    <Card>
                        <Card.Body>
                            <Card.Title className='mb-3'>Make an Appointment</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kategori</Form.Label>
                                    <Form.Select
                                        onChange={(event) => { handleChange("id_departement", event.target.value) }}
                                        value={inputData.id_departement}>
                                        <option value="" defaultValue disabled hidden>Select here</option>
                                        {props.departmentsReducer.map(item => (
                                            <option value={item.id} key={item.id}>{item.name}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Doctor</Form.Label>
                                    <Form.Select
                                        onChange={(event) => { handleChange("id_doctor", event.target.value) }}
                                        value={inputData.id_doctor}
                                        disabled={inputData.id_departement === "" ? true : false}
                                    >
                                        <option value="" defaultValue disabled hidden>Select here</option>
                                        {DoctorList.map(item => (
                                            <option value={item.id} key={item.id}>{item.name}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Keluhan</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={(event) => { handleChange("catatan_keluhan", event.target.value) }}
                                        value={inputData.catatan_keluhan} />
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

                                <Button variant="primary" type="submit">Create Appointment</Button>
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

const mapStateToProps = state => ({
    departmentsReducer: state.departmentsReducer
});

export default connect(mapStateToProps)(AppointmentPage);
