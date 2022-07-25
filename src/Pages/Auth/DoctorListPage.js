import React from 'react'
import Template from '../../Components/Dashboard Page/Template'

export default function DoctorListPage() {
    const content = () => {
        return (
            <h1>Doctor List</h1>
        )
    }

    return (
        <Template content={content()} />
    )
}
