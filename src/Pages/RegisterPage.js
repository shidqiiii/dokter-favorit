import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import FormComp from '../Components/Entry Page/FormComp'

export default function RegisterPage() {
    const [user, setUser] = useState('pasien')
    const changeUser = (user) => {
        setUser(user)
    }

    const additionalForm = () => {
        return (
            <>
                <Form.Group className="mb-3">
                    <Form.Label className='fw-bold'>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your full name" />
                </Form.Group>
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
                {selectDepartemen()}
            </>
        )
    }

    const selectDepartemen = () => {
        if (user === 'doctor') {
            return (
                <Form.Group className="mb-3">
                    <Form.Label className='fw-bold'>Departement</Form.Label>
                    <Form.Select>
                        <option>KSM Dermatologi dan Venereologi</option>
                        <option>Orthopaedi dan Traumatologi</option>
                        <option>Ilmu Kebidanan dan Kandungan</option>
                    </Form.Select>
                </Form.Group>
            )
        }
    }

    const ui =
    {
        headerTitle: "Create an account",
        headerCaption: "Let's get started.",
        buttonText: "Create account",
        text: "Already",
        hrefText: "Sign in",
        href: "login",
        additionalForm: additionalForm()
    }

    return (
        <FormComp
            ui={ui} />
    )
}
