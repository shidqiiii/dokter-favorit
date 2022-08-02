import React, { useState } from 'react'
import { Card, Col, Container, Form, Row, Alert } from 'react-bootstrap';
import '../CSS/Entry Page/EntryPage.css'
import { BaseApi } from '../API/BaseApi';
import { NavLink, useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { connect } from "react-redux";
// import FormComponent from '../Components/Entry Page/FormComponent'

const ui =
{
    headerTitle: "Create an account",
    headerCaption: "Let's get started.",
    buttonText: "Create account",
    text: "Already",
    hrefText: "Sign in",
    href: "login",
}

function RegisterPage(props) {
    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    });

    const [isLoading, setIsLoading] = useState(false)
    const [inputError, setinputError] = useState("")

    const navigate = useNavigate();

    // HandleChange
    const handleChange = (target, value) => {
        setInputData({
            ...inputData,
            [target]: value
        });
        setinputError("")
    }

    const handleRegisterUser = async () => {
        const data = await BaseApi.UserRegister(inputData.name, inputData.email, inputData.password, inputData.role);
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

    const selectDepartemen = () => {
        if (inputData.role === 'doctor') {
            return (
                <Form.Group className="mb-3">
                    <Form.Label className='fw-bold'>Departement</Form.Label>
                    <Form.Select
                        onChange={(event) => { handleChange("id_departement", event.target.value) }}
                        value={inputData.id_departement}>
                        <option value="" defaultValue disabled hidden>Select here</option>
                        {props.departmentsReducer.map(item => (
                            <option value={item.id} key={item.id}>{item.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            )
        }
    }

    return (
        <div className="entry">
            <Container>
                <Card className='mx-5 shadow-lg'>
                    <Row className='d-flex align-items-center justify-content-center py-5'>
                        <Col sm={10} lg={5} className='my-auto px-5'>
                            <Form onSubmit={handleSubmit}>
                                <header className='mb-3 text-center'>
                                    <Card.Title className='fw-bold fs-2 my-0'>
                                        {ui.headerTitle}
                                    </Card.Title>
                                    <Card.Text>
                                        {ui.headerCaption}
                                    </Card.Text>
                                </header>

                                {isLoading ?
                                    (
                                        <div className='text-center'>
                                            <Spinner animation="border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </Spinner>
                                        </div>
                                    )
                                    :
                                    (
                                        <>
                                            <Form.Group className="mb-3">
                                                <Form.Label className='fw-bold'>Email Address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    value={inputData.firstName}
                                                    onChange={(event) => { handleChange("email", event.target.value) }} />
                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Form.Label className='fw-bold'>Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="*******"
                                                    value={inputData.password}
                                                    onChange={(event) => { handleChange("password", event.target.value) }} />
                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Form.Label className='fw-bold'>Full Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter your full name"
                                                    value={inputData.fullName}
                                                    onChange={(event) => { handleChange("fullName", event.target.value) }} />
                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Form.Label className='fw-bold'>Role</Form.Label>
                                                <Form.Select
                                                    onChange={(event) => { handleChange("role", event.target.value) }}
                                                    value={inputData.role}
                                                >
                                                    <option value="" defaultValue disabled hidden>Select here</option>
                                                    <option value={"pasien"}>Pasien</option>
                                                    <option value={"doctor"}>Doctor</option>
                                                </Form.Select>
                                            </Form.Group>

                                            {selectDepartemen()}
                                            {handleError()}

                                            <Form.Group className="mt-4 mb-3">
                                                <Form.Control type="submit" value={ui.buttonText} />
                                            </Form.Group>


                                            <Card.Text className='text-center'>{ui.text} have an account? <NavLink to={`/${ui.href}`}>
                                                {ui.hrefText}
                                            </NavLink>
                                            </Card.Text>
                                        </>
                                    )}
                            </Form >
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
