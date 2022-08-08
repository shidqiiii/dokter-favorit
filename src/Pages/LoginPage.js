import React, { useState } from 'react'
import { Alert, Card, Container, Form } from 'react-bootstrap';
import Loader from '../Components/Loader'
import '../CSS/Entry Page/EntryPage.css'
import { BaseApi } from '../API/BaseApi';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import FormControl from '../Components/Form/FormGroupControl';
import FormTemplate from '../Components/Form/FormTemplate';

export default function LoginPage() {
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        email: "",
        password: "",
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

    const handleForm = () => {
        if (!isLoading) {
            return (<>
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

                {handleError()}

                <FormControl
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

    return (
        <div className="entry">
            <Container>
                <FormTemplate
                    handleSubmit={handleSubmit}
                    handleForm={handleForm()}
                    title={"Welcome back"}
                    heading={"Welcome back! Please enter your details."} />
            </Container>
        </div>
    )
}