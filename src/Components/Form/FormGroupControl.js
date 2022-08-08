import React from 'react'
import { Form } from 'react-bootstrap'

export default function FormGroup(props) {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{props.name}</Form.Label>
            <Form.Control
                type={props.type}
                placeholder={`Enter your ${props.name}`}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                required />
        </Form.Group>
    )
}
