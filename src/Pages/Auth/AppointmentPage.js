import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, Container, Form } from 'react-bootstrap'
import Template from '../../Components/Dashboard Page/Template'
import { connect } from "react-redux";
import { BaseApi } from '../../API/BaseApi';
import Cookies from 'js-cookie';

function AppointmentPage(props) {
    const handleProfile = () => {
        let data = Cookies.get('data');
        data = JSON.parse(data)
        return data;
    }

    const [inputData, setInputData] = useState({
        id_department: "",
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

    const [DoctorList, setDoctorList] = useState([]);

    const handleDoctorsPerDepartments = async (id) => {
        const data = await BaseApi.GetAllDoctors(id);
        if (data.error === "SUCCESS") {
            setDoctorList(data.data);
        } else if (data.error === "FAIL") {
            setDoctorList([])
        }
    };

    const handleCreateAppointment = async () => {
        const data = await BaseApi.CreateAppointment(inputData.date, inputData.duration, inputData.id_department, inputData.id_doctor, inputData.id_pasien, inputData.catatan_keluhan, inputData.total);
        if (data.status === "SUCCESS") {
            console.log("sucess");
        } else {
            setinputError(data.message);
        }
    };

    const handleTotalPrice = () => {
        let doctorPrice = DoctorList
            .filter(e => e.id === parseInt(inputData.id_doctor))
            .map(e => e.price_hour)

        let total = parseInt(inputData.duration) * doctorPrice;


        if (inputData.id_doctor !== "" & inputData.duration !== "") {
            return total
        } return 0
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCreateAppointment();
    }

    const handleError = () => {
        if (inputError !== "") {
            return (
                <Alert variant="danger">
                    {inputError}
                </Alert>)
        }
    }

    useEffect(() => {
        handleDoctorsPerDepartments(inputData.id_department);
        handleChange("total", handleTotalPrice());
    }, [inputData.id_department, handleTotalPrice()])

    function content() {
        return (
            <div className="appointment">
                <Container fluid>
                    <Card>
                        <Card.Body>
                            <Card.Title className='mb-3'>Make an Appointment</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Kategori</Form.Label>
                                    <Form.Select
                                        onChange={(event) => { handleChange("id_department", event.target.value); }}
                                        value={inputData.id_department}
                                        required
                                    >
                                        <option value="" defaultValue disabled hidden>Select here</option>
                                        {props.departmentsReducer.map(item => (
                                            <option value={item.id} key={item.id}>{item.name}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Doctor</Form.Label>
                                    <Form.Select
                                        onChange={(event) => { handleChange("id_doctor", event.target.value); }}
                                        value={inputData.id_doctor}
                                        disabled={inputData.id_department === "" ? true : false}
                                        required
                                    >
                                        <option value="" defaultValue disabled hidden>Select here</option>
                                        {DoctorList.length !== 0 ?
                                            (DoctorList.map(item => (
                                                <option value={item.id} key={item.id}>{item.name}</option>
                                            )))
                                            :
                                            (<option value={0} defaultValue disabled>Tidak ada dokter</option>)}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Keluhan</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={(event) => { handleChange("catatan_keluhan", event.target.value); }}
                                        value={inputData.catatan_keluhan} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Pilih Tanggal</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        onChange={(event) => handleChange("date", event.target.value)}
                                        value={inputData.date}
                                        required />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Durasi</Form.Label>
                                    <Form.Select
                                        onChange={(event) => handleChange("duration", event.target.value)}
                                        value={inputData.duration}
                                        required
                                    >
                                        <option value="" defaultValue disabled hidden>Select here</option>
                                        <option value={1}>1 Jam</option>
                                        <option value={2}>2 Jam</option>
                                        <option value={3}>3 Jam</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Biaya</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={"Rp " + handleTotalPrice()?.toLocaleString('id-ID') || ''}
                                        disabled />
                                </Form.Group>

                                {handleError()}

                                <Button variant="primary" type="submit">Create Appointment</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        );
    }

    return (
        <Template content={content()} />
    )
}

const mapStateToProps = state => ({
    departmentsReducer: state.departmentsReducer
});

export default connect(mapStateToProps)(AppointmentPage);
