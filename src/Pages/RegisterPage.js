import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import '../CSS/Entry Page/EntryPage.css'
import axios from "axios";
import { BaseApi } from '../API/BaseApi';
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

export default function RegisterPage() {
    const [data, setData] = useState({
        email: "",
        password: "",
        fullName: "",
        role: "",
        departement: ""
    });

    const [departementList, setDepartementList] = useState(null);

    // HandleChange
    const handleChange = (target, value) => {
        setData({
            ...data,
            [target]: value
        })
    }

    const handleAllDepartement = async () => {
        const data = await BaseApi.allDepartement();
        // console.log(data.data);
        if (data.status === "SUCCESS") {
            setDepartementList(data.data)
        }
    }

    useEffect(() => {
        handleAllDepartement();
    }, [])


    const handleRegisterDoctor = async () => {
        let result = null;

        await axios.post("https://3853-114-5-147-212.ap.ngrok.io/auth/Register", {
            email: data.email,
            role: data.role,
            name: data.fullName,
            password: data.password,
            id_department: data.departement,
        }).then((response) => {
            console.log(response);
            result = response
        })
            .catch((error) => {
                console.log(error);
            })
        return result
    };

    // const handleRegisterPasien = async () => {
    //     let result = null;

    //     await axios.post("https://3853-114-5-147-212.ap.ngrok.io/auth/Register", {
    //         email: data.email,
    //         role: data.role,
    //         name: data.fullName,
    //         password: data.password,
    //     }).then((response) => {
    //         console.log(response);
    //         result = response
    //     })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    //     return result
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.role === 'doctor') {
            handleRegisterDoctor()
        }
        // else {
        //     handleRegisterPasien()
        // }
    }

    const selectDepartemen = () => {
        if (data.role === 'doctor') {
            return (
                <Form.Group className="mb-3">
                    <Form.Label className='fw-bold'>Departement</Form.Label>
                    <Form.Select
                        onChange={(event) => { handleChange("departement", event.target.value) }}
                        value={data.departement}>
                        <option value="" defaultValue disabled hidden>Select here</option>
                        {departementList.map(item => (
                            <option value={item.id} key={item.id}>{item.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
            )
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
                                        value={data.firstName}
                                        onChange={(event) => { handleChange("email", event.target.value) }} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="*******"
                                        value={data.password}
                                        onChange={(event) => { handleChange("password", event.target.value) }} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={data.fullName}
                                        onChange={(event) => { handleChange("fullName", event.target.value) }} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className='fw-bold'>Role</Form.Label>
                                    <Form.Select
                                        onChange={(event) => { handleChange("role", event.target.value) }}
                                        value={data.role}
                                    >
                                        <option value="" defaultValue disabled hidden>Select here</option>
                                        <option value={"pasien"}>Pasien</option>
                                        <option value={"doctor"}>Doctor</option>
                                    </Form.Select>
                                </Form.Group>

                                {selectDepartemen()}

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

    // const additionalForm = () => {
    //     return (
    //         <>
    //             <Form.Group className="mb-3">
    //                 <Form.Label className='fw-bold'>Full Name</Form.Label>
    //                 <Form.Control type="text" placeholder="Enter your full name" />
    //             </Form.Group>
    //             <Form.Group className="mb-3">
    //                 <Form.Label className='fw-bold'>User</Form.Label>
    //                 <Form.Select
    //                     onChange={(e) => changeUser(e.target.value)}
    //                     value={user}
    //                 >
    //                     <option value={"pasien"}>Pasien</option>
    //                     <option value={"doctor"}>Doctor</option>
    //                 </Form.Select>
    //             </Form.Group>
    //             {selectDepartemen()}
    //         </>
    //     )
    // }