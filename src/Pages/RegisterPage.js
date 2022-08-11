import React, { useState } from 'react'
import { Card, Container, Alert, Row, Col } from 'react-bootstrap';
import '../CSS/Entry Page/EntryPage.css'
import { BaseApi } from '../API/BaseApi';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import Loader from '../Components/Loader';
import FormGroupControl from '../Components/Form/FormGroupControl';
import FormGroupSelect from '../Components/Form/FormGroupSelect';
import FormTemplate from '../Components/Form/FormTemplate';
import Modals from '../Components/Modals';

function RegisterPage(props) {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        id_departement: ""
    });

    const [isLoading, setIsLoading] = useState(false)
    const [inputError, setinputError] = useState("")
    const [show, setShow] = useState(false);

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
            handleRegisterUser();
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

    const handleForm = () => {
        if (!isLoading) {
            return (<>
                <FormGroupControl
                    name="Full Name"
                    type="Text"
                    value={inputData.name}
                    onChange={(event) => { handleChange("name", event.target.value) }} />

                <FormGroupControl
                    name="Email"
                    type="Email"
                    value={inputData.email}
                    onChange={(event) => { handleChange("email", event.target.value) }} />

                <FormGroupControl
                    name="Password"
                    type="Password"
                    value={inputData.password}
                    onChange={(event) => { handleChange("password", event.target.value) }} />

                <FormGroupSelect
                    name="Role"
                    value={inputData.role}
                    onChange={(event) => { handleChange("role", event.target.value) }}>
                    <option value={"pasien"}>Pasien</option>
                    <option value={"doctor"}>Doctor</option>
                </FormGroupSelect>

                {selectDepartemen()}
                {handleError()}

                <FormGroupControl
                    type="Submit"
                    value="Create Account" />


                <Card.Text className='text-center'>Already have an account? <NavLink to={"/login"}>
                    Sign In
                </NavLink>
                </Card.Text>
            </>)
        }
        return <Loader />

    }

    const handleRegisterUser = async () => {
        const data = await BaseApi.UserRegister(inputData.name, inputData.email, inputData.password, inputData.role, inputData.department);
        if (data.status === "SUCCESS") {
            setShow(true)
        } else {
            setinputError(data.message);
        }

        setIsLoading(false);
    }

    const selectDepartemen = () => {
        if (inputData.role === 'doctor') {
            return (
                <FormGroupSelect
                    name="Departement"
                    value={inputData.id_departement}
                    onChange={(event) => { handleChange("id_departement", event.target.value) }}>
                    {props.departmentsReducer.length !== 0 ?
                        (props.departmentsReducer.map(item => (
                            <option value={item.id} key={item.id}>{item.name}</option>
                        )))
                        :
                        (<option value={0} defaultValue disabled>Tidak ada department</option>)}
                </FormGroupSelect>
            )
        }
    }

    return (
        <div className="entry">
            <Container>
                <Card className='mx-5 shadow-lg'>
                    <Row className='d-flex align-items-center justify-content-center py-5'>
                        <Col sm={10} lg={5} className='my-auto px-5'>
                            <FormTemplate
                                handleSubmit={handleSubmit}
                                handleForm={handleForm()}
                                title={"Create an account"}
                                heading={"Let's get started."} />

                        </Col>
                        <Col sm={10} lg={5} className='d-flex align-items-center justify-content-center'>
                            <Card.Img variant="top" src="./Image/login-illustrator.png" />
                        </Col>
                    </Row>
                </Card>

                <Modals
                    setShow={setShow}
                    show={show}
                    page={"/login"}
                    text={"Register Successful!"} />
            </Container>
        </div>
    )
}



const mapStateToProps = state => ({
    departmentsReducer: state.departmentsReducer
});

export default connect(mapStateToProps)(RegisterPage);