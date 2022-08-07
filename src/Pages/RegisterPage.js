import React, { useState } from 'react'
import { Card, Col, Container, Form, Row, Alert } from 'react-bootstrap';
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
                <FormTemplate>
                    <Form onSubmit={handleSubmit}>
                        <header className='mb-3 text-center'>
                            <Card.Title className='fw-bold fs-2 my-0'>
                                Create an account
                            </Card.Title>
                            <Card.Text>
                                Let's get started.
                            </Card.Text>
                        </header>

                        {handleForm()}
                    </Form >
                </FormTemplate>
            </Container>
        </div>
    )
}



const mapStateToProps = state => ({
    departmentsReducer: state.departmentsReducer
});

export default connect(mapStateToProps)(RegisterPage);