import React from 'react'
import { Card } from 'react-bootstrap'

export default function Footer() {
    return (
        <footer>
            <ul class="nav justify-content-center border-bottom py-3 mb-3 gap-3">
                <li class="nav-item">Home</li>
                <li class="nav-item">Featured</li>
                <li class="nav-item">About</li>
                <li class="nav-item">FAQs</li>
                <li class="nav-item">Contact</li>
            </ul>
            <Card.Text class="text-center">© 2022 DoctorFav, Inc</Card.Text>
        </footer>
    )
}
