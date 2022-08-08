import React, { useState } from 'react'
import { Card, Container, Form, Alert, Row, Col } from 'react-bootstrap';
import '../CSS/Entry Page/EntryPage.css'
import { BaseApi } from '../API/BaseApi';
import { NavLink, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import Loader from '../Components/Loader';
import FormControl from '../Components/Form/FormGroupControl';
import FormSelect from '../Components/Form/FormGroupSelect';
import FormTemplate from '../Components/Form/FormTemplate';

function RegisterPage(props) {
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        id_departement: ""
    });

    const [isLoading, setIsLoading] = useState(false)
    const [inputError, setinputError] = useState("")

    const handleChange = (target, value) => {
        setInputData({
            ...inputData,
            [target]: value
        });
        setinputError("")
    }

    const handleRegisterUser = async () => {
        const data = await BaseApi.UserRegister(inputData.name, inputData.email, inputData.password, inputData.role, inputData.department);
        if (data.status === "SUCCESS") {
            // console.log("sucess");
            navigate('/login');
        } else {
            setinputError(data.message);
        }

        setIsLoading(false);
    };

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
                <FormControl
                    name="Full Name"
                    type="Text"
                    value={inputData.fullName}
                    onChange={(event) => { handleChange("fullName", event.target.value) }} />

                <FormControl
                    name="Email"
                    type="Email"
                    value={inputData.email}
                    onChange={(event) => { handleChange("email", event.target.value) }} />

                <FormControl
                    name="Password"
                    type="Password"
                    value={inputData.password}
                    onChange={(event) => { handleChange("password", event.target.value) }} />

                <FormSelect
                    name="Role"
                    value={inputData.role}
                    onChange={(event) => { handleChange("role", event.target.value) }}>
                    <option value={"pasien"}>Pasien</option>
                    <option value={"doctor"}>Doctor</option>
                </FormSelect>

                {selectDepartemen()}
                {handleError()}

                <FormControl
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

    const selectDepartemen = () => {
        if (inputData.role === 'doctor') {
            return (
                <FormSelect
                    name="Departement"
                    value={inputData.id_departement}
                    onChange={(event) => { handleChange("id_departement", event.target.value) }}>
                    {props.departmentsReducer.map(item => (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))}
                </FormSelect>
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
            </Container>
        </div>
    )
}



const mapStateToProps = state => ({
    departmentsReducer: state.departmentsReducer
});

export default connect(mapStateToProps)(RegisterPage);