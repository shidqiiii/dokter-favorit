import React from 'react'
import Template from '../../Components/Dashboard Page/Template'

export default function AppointmentPage() {
    const content = () => {
        return (
            <h1>Appointment</h1>
        )
    }

    return (
        <Template content={content()} />
    )
}
