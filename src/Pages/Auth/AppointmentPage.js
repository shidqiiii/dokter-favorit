import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, Container, Form, FormControl } from 'react-bootstrap'
import Template from '../../Components/Dashboard Page/Template'
import { connect } from "react-redux";
import { BaseApi } from '../../API/BaseApi';
import Cookies from 'js-cookie';
import FormGroupControl from '../../Components/Form/FormGroupControl';
import FormGroupSelect from '../../Components/Form/FormGroupSelect';
import FormTemplate from '../../Components/Form/FormTemplate';
import Loader from '../../Components/Loader';
import { useNavigate } from 'react-router-dom';
import Modals from '../../Components/Modals';

function AppointmentPage(props) {
    const navigate = useNavigate();
    const handleProfile = () => {
        let data = Cookies.get('data');
        data = JSON.parse(data)
        return data.id;
    }

    const [inputData, setInputData] = useState({
        id_department: "",
        id_doctor: "",
        id_pasien: handleProfile(),
        catatan_keluhan: "",
        total: "",
        date: "",
        duration: ""
    });

    const [isLoading, setIsLoading] = useState(false)
    const [inputError, setinputError] = useState("")
    const [show, setShow] = useState(false)
    const [DoctorList, setDoctorList] = useState([]);

    const handleChange = (target, value) => {
        setInputData({
            ...inputData,
            [target]: value
        });
        setinputError("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            handleCreateAppointment();
        }, 1000);
    }

    const handleError = () => {
        if (inputError !== "") {
            return (
                <Alert variant="danger">
                    {inputError}
                </Alert>)
        }
    }

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
            setShow(true)
        } else {
            setinputError(data.message);
        }

        setIsLoading(false);
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

    useEffect(() => {
        handleDoctorsPerDepartments(inputData.id_department);
        handleChange("total", handleTotalPrice());
    }, [inputData.id_department, handleTotalPrice()])

    const handleForm = () => {
        if (!isLoading) {
            return (<>
                <FormGroupSelect
                    name="Department"
                    value={inputData.id_department}
                    onChange={(event) => { handleChange("id_department", event.target.value) }}>
                    {props.departmentsReducer.map(item => (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))}
                </FormGroupSelect>

                <FormGroupSelect
                    name="Doctor"
                    value={inputData.id_doctor}
                    onChange={(event) => { handleChange("id_doctor", event.target.value) }}
                    disabled={inputData.id_department === "" ? true : false}>
                    {DoctorList.length !== 0 ?
                        (DoctorList.map(item => (
                            <option value={item.id} key={item.id}>{item.name}</option>
                        )))
                        :
                        (<option value={0} defaultValue disabled>Tidak ada dokter</option>)}
                </FormGroupSelect>

                <FormGroupControl
                    name="Complaint"
                    type="text"
                    value={inputData.catatan_keluhan}
                    onChange={(event) => { handleChange("catatan_keluhan", event.target.value) }} />

                <FormGroupControl
                    name="Pilih Tanggal"
                    type="datetime-local"
                    value={inputData.date}
                    onChange={(event) => { handleChange("date", event.target.value) }} />

                <FormGroupSelect
                    name="Durasi"
                    value={inputData.duration}
                    onChange={(event) => { handleChange("duration", event.target.value) }}>
                    {(Array.from({ length: 3 }).map((_, idx) => (
                        <option value={idx + 1} key={idx + 1}>{idx + 1} Jam</option>
                    )))}
                </FormGroupSelect>

                <FormGroupControl
                    name="Biaya"
                    type="text"
                    value={"Rp " + handleTotalPrice()?.toLocaleString('id-ID') || ''}
                    disabled={true} />

                {handleError()}

                <Form.Control
                    type="Submit"
                    value="Create Appointment"
                    className='btn-primary p-2 mt-4' />
            </>)
        }
        return <Loader />
    }

    function content() {
        return (
            <div className="appointment">
                <Container fluid>
                    <Card>
                        <Card.Body>
                            <Card.Title className='mb-3'>Make an Appointment</Card.Title>
                            <FormTemplate
                                handleSubmit={handleSubmit}
                                handleForm={handleForm()} />
                        </Card.Body>
                    </Card>

                    <Modals
                        setShow={setShow}
                        show={show}
                        page={"/history"}
                        text={"Appointment has been Created!"} />
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
