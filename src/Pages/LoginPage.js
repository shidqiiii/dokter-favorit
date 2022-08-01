import React, { useState } from 'react'
import { Alert, Card, Col, Container, Form, Row } from 'react-bootstrap';
import '../CSS/Entry Page/EntryPage.css'
import { BaseApi } from '../API/BaseApi';
import { NavLink, useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { updateUser } from '../Redux/Action/User_action';
import Cookies from 'js-cookie'


// import FormComponent from '../Components/Entry Page/FormComponent'


const ui = {
    headerTitle: "Welcome back",
    headerCaption: "lcome back! Please enter your details.",
    buttonText: "Sign in",
    text: "Don't",
    hrefText: "Sign up",
    href: "register",
}

function LoginPage(props) {
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
    });

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

    const handleLoginApi = async () => {
        const data = await BaseApi.Login(inputData.email, inputData.password);
        if (data.status === "SUCCESS") {
            // props.dispatch(updateUser({
            //     token: data.token
            // }));
            const expired = new Date(new Date().getTime() + 60 * 60 * 1000);
            Cookies.set('token', data.token, { expires: expired });
            navigate('/dashboard');
        } else if (data.error === "ERROR") {
            setinputError(data.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLoginApi()
    }

    const handleError = () => {
        if (inputError !== "") {
            return (
                <Alert variant="danger">
                    {inputError}
                </Alert>)
        }
    }

    return (
        // <FormComponent
        //     ui={ui} />
        <div className="entry">
            {console.log(props.userReducer)}
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

                                {handleError()}

                                <Form.Group className="mt-4 mb-3">
                                    <Form.Control type="submit" value={ui.buttonText} />
                                </Form.Group>

                                <Card.Text className='text-center'>{ui.text} have an account? <NavLink to={`/${ui.href}`}>
                                    {ui.hrefText}
                                </NavLink>
                                </Card.Text>
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
    userReducer: state.userReducer
});

export default connect(mapStateToProps)(LoginPage);