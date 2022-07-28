import React from 'react'
import { Card } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer>
            <ul className="nav justify-content-center border-bottom py-3 mb-3 gap-3">
                <li className="nav-item">Home</li>
                <li className="nav-item">Featured</li>
                <li className="nav-item">About</li>
                <li className="nav-item">FAQs</li>
                <li className="nav-item">Contact</li>
            </ul>
            <Card.Text className="text-center">© 2022 DoctorFav, Inc</Card.Text>
        </footer>
    )
}
