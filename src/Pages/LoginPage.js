import React, { useState } from 'react'
import { Alert, Card, Col, Container, Form, Row } from 'react-bootstrap';
import '../CSS/Entry Page/EntryPage.css'
import { BaseApi } from '../API/BaseApi';
import { useNavigate } from 'react-router-dom';
// import FormComponent from '../Components/Entry Page/FormComponent'

const ui = {
    headerTitle: "Welcome back",
    headerCaption: "lcome back! Please enter your details.",
    buttonText: "Sign in",
    text: "Don't",
    hrefText: "Sign up",
    href: "register",
}

export default function LoginPage() {
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
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

    const handleLoginApi = async () => {
        const data = await BaseApi.Login(inputData.email, inputData.password);
        console.log(data);
        if (data.status === "SUCCESS") {
            console.log(data);
            navigate('/dashboard');
        } else if (data.error === "ERROR") {
            setinputError(data.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLoginApi()
    }

    const navigate = useNavigate();

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

                                <Card.Text className='text-center'>{ui.text} have an account? <a href={`/${ui.href}`}>
                                    {ui.hrefText}
                                </a>
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
