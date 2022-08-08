import React from 'react'
import { Card, Form } from 'react-bootstrap'

export default function FormTemplate(props) {
    return (
        <Form onSubmit={props.handleSubmit}>
            <header className='mb-3 text-center'>
                <Card.Title className='fw-bold fs-2 my-0'>
                    {props.title}
                </Card.Title>
                <Card.Text>
                    {props.heading}
                </Card.Text>
            </header>

            {props.handleForm}
        </Form >)
}
