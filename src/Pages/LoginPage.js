import React, { useState } from 'react'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import Loader from '../Components/Loader'
import '../CSS/Entry Page/EntryPage.css'
import { BaseApi } from '../API/BaseApi';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie'
import FormGroupControl from '../Components/Form/FormGroupControl';
import FormTemplate from '../Components/Form/FormTemplate';
import Modals from '../Components/Modals';


export default function LoginPage() {

    const [inputData, setInputData] = useState({
        email: "",
        password: "",
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

    const handleForm = () => {
        if (!isLoading) {
            return (<>
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

                {handleError()}

                <FormGroupControl
                    type="Submit"
                    value="Sign in" />

                <Card.Text className='text-center'>Don't have an account? <NavLink to={`/register`}>
                    Sign Up
                </NavLink>
                </Card.Text>
            </>)
        }
        return <Loader />

    }

    const handleLoginUser = async () => {
        const data = await BaseApi.UserLogin(inputData.email, inputData.password);
        if (data.status === "SUCCESS") {
            const feedback = { 'name': data.name, 'email': data.email, 'id': data.id, 'token': data.token }
            const expired = new Date(new Date().getTime() + 60 * 60 * 1000);
            Cookies.set('data', JSON.stringify(feedback), { expires: expired });
            setShow(true);
        } else if (data.error === "ERROR") {
            setinputError(data.message);
        }

        setIsLoading(false);
    };

    return (
        <div className="entry">
            <Container>
                <Card className='mx-5 shadow-lg'>
                    <Row className='d-flex align-items-center justify-content-center py-5'>
                        <Col sm={10} lg={5} className='my-auto px-5'>
                            <FormTemplate
                                handleSubmit={handleSubmit}
                                handleForm={handleForm()}
                                title={"Welcome back"}
                                heading={"Welcome back! Please enter your details."} />
                        </Col>
                        <Col sm={10} lg={5} className='d-flex align-items-center justify-content-center'>
                            <Card.Img variant="top" src="./Image/login-illustrator.png" />
                        </Col>
                    </Row>
                </Card>

                <Modals
                    setShow={setShow}
                    show={show}
                    page={"/dashboard"}
                    text={"Login Successful!"} />

            </Container>
        </div >
    )
}