import React, { useState } from 'react'
import { Alert, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import '../CSS/Entry Page/EntryPage.css'
import { BaseApi } from '../API/BaseApi';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import { connect } from "react-redux";

// import FormComponent from '../Components/Entry Page/FormComponent'


const ui = {
    headerTitle: "Welcome back",
    headerCaption: "Welcome back! Please enter your details.",
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

    const handleLoginUser = async () => {
        const data = await BaseApi.UserLogin(inputData.email, inputData.password);
        if (data.status === "SUCCESS") {
            const feedback = { 'name': data.name, 'email': data.email, 'id': data.id, 'token': data.token }
            const expired = new Date(new Date().getTime() + 60 * 60 * 1000);
            Cookies.set('data', JSON.stringify(feedback), { expires: expired });
            navigate('/dashboard');
        } else if (data.error === "ERROR") {
            setinputError(data.message);
        }

        setIsLoading(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            handleLoginUser();
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

    return (
        // <FormComponent
        //     ui={ui} />
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
    userReducer: state.userReducer
});

export default connect(mapStateToProps)(LoginPage);
