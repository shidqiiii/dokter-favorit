import React from 'react'
import { Form } from 'react-bootstrap'

export default function FormGroupSelect(props) {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{props.name}</Form.Label>
            <Form.Select
                onChange={props.onChange}
                value={props.value}
                disabled={props.disabled}
                required>
                <option value="" defaultValue disabled hidden>Select here</option>
                {props.children}
            </Form.Select>
        </Form.Group>
    )
}
