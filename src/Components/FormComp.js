import React, { useState } from 'react'
import { Card, Form } from 'react-bootstrap'

export default function FormComp() {
    const [isLogin, setIsLogin] = useState(true);
    const [user, setUser] = useState('pasien')
    const changeUser = (user) => {
        setUser(user)
    }

    const formInput = (label, type, placeholder) => {
        return (
            <Form.Group className="mb-3">
                <Form.Label className='fw-bold'>{label}</Form.Label>
                <Form.Control type={type} placeholder={placeholder} />
            </Form.Group>
        )
    }

    return (
        <Form>
            <header className='mb-3 text-center'>
                <Card.Title className='fw-bold fs-2 my-0'>
                    {isLogin ? "Welcome back" : "Create an account"}
                </Card.Title>
                <Card.Text>
                    {isLogin ? "Welcome back! Please enter your details." : "Let's get started."}
                </Card.Text>
            </header>

            {formInput("Email Address", "email", "Enter your email")}
            {formInput("Password", "password", "*******")}

            {isLogin ?
                (<></>)
                :
                (<>
                    {formInput("Full Name", "text", "Enter your full name")}
                    <Form.Group className="mb-3">
                        <Form.Label className='fw-bold'>User</Form.Label>
                        <Form.Select
                            onChange={(e) => changeUser(e.target.value)}
                            value={user}
                        >
                            <option value={"pasien"}>Pasien</option>
                            <option value={"doctor"}>Doctor</option>
                        </Form.Select>
                    </Form.Group>
                    {user === "doctor" ?
                        (
                            <Form.Group className="mb-3">
                                <Form.Label className='fw-bold'>Departement</Form.Label>
                                <Form.Select>
                                    <option>KSM Dermatologi dan Venereologi</option>
                                    <option>Orthopaedi dan Traumatologi</option>
                                    <option>Ilmu Kebidanan dan Kandungan</option>
                                </Form.Select>
                            </Form.Group>
                        )
                        :
                        (<></>)}
                </>)}

            <Form.Group className="mt-4 mb-3">
                <Form.Control type="submit" value={isLogin ? "Sign in" : "Create account"} />
            </Form.Group>

            <Card.Text className='text-center'>{isLogin ? "Don't" : "Already"} have an account? <span onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "Sign up" : "Sign in"}
            </span>
            </Card.Text>
        </Form>
    )
}
