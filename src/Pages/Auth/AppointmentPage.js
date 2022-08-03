import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import Template from '../../Components/Dashboard Page/Template'
import { connect } from "react-redux";
import { BaseApi } from '../../API/BaseApi';
import Cookies from 'js-cookie';
import moment from 'moment';

function AppointmentPage(props) {

    const handleProfile = () => {
        let data = Cookies.get('data');
        data = JSON.parse(data)
        return data;
    }

    const [inputData, setInputData] = useState({
        start: "",
        end: "",
        id_departement: "",
        id_doctor: "",
        id_pasien: handleProfile().id,
        catatan_keluhan: "",
        total: "",
        date: "",
        duration: ""
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
        console.log(inputData);
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

    const handleStartTime = (event) => {
        handleChange("date", event.target.value);

        const start = moment(event.target.value).toISOString();
        handleChange("start", start);
    }

    const handleEndTime = (event) => {
        handleChange("duration", event.target.value);

        const end = moment(inputData.start).add(event.target.value, 'hours').toISOString();
        console.log(end);
        // handleChange("end", end);
    }

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
                                        value={inputData.id_departement}
                                        required>
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
                                        required
                                    >
                                        <option value="" defaultValue disabled hidden>Select here</option>
                                        {DoctorList.length !== 0 ?
                                            (DoctorList.map(item => (
                                                <option value={item.id} key={item.id}>{item.name}</option>
                                            )))
                                            :
                                            (<option value={0} defaultValue disabled>Tidak ada dokter</option>)


                                        }
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Keluhan</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={(event) => { handleChange("catatan_keluhan", event.target.value) }}
                                        value={inputData.catatan_keluhan}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Pilih Tanggal</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        onChange={handleStartTime}
                                        value={inputData.date}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Durasi</Form.Label>
                                    <Form.Select
                                        onChange={handleEndTime}
                                        value={inputData.duration}
                                        required
                                    >
                                        <option value="" defaultValue disabled hidden>Select here</option>
                                        <option value={1} >1 Jam</option>
                                        <option value={2} >2 Jam</option>
                                        <option value={3} >3 Jam</option>
                                    </Form.Select>
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
