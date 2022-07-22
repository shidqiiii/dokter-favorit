import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";

export default function Feedback() {
    const sliderEffect = (type) => {
        var slider = document.getElementById("slider");

        switch (type) {
            case "slideLeft":
                slider.scrollLeft = slider.scrollLeft - 250;
                break;

            case "slideRight":
                slider.scrollLeft = slider.scrollLeft + 250;
                break;

            default:
                break;
        }
    }

    return (
        <div id='feedback' className="py-5">
            <Container>
                <header className='d-flex justify-content-between align-items-center'>
                    <Card.Title className='mb-4 fw-bold fs-2'>Start Your <br /> Consultation With Doctor</Card.Title>
                    <div className='arrow d-flex gap-2'>
                        <AiOutlineArrowLeft size={35} className="icon" onClick={() => sliderEffect('slideLeft')} />
                        <AiOutlineArrowRight size={35} className="icon" onClick={() => sliderEffect('slideRight')} />
                    </div>
                </header>
                <div className="feedback-card d-flex" id='slider'>
                    {Array.from({ length: 8 }).map((_, idx) => (
                        <Card className='p-2 mx-2' key={idx}>
                            <Card.Body>
                                <Card.Text>
                                    Slate helps you see how many more days you need to work to reach your financial goal.
                                </Card.Text>
                                <div className='card-profile d-flex gap-3 align-items-center'>
                                    <Card.Img variant="top" src="./Image/doctor.png" className='pt-2' />
                                    <div>
                                        <Card.Title className='fw-bold m-0 fs-6'>Mark Ottonomi</Card.Title>
                                        <Card.Text>20 y.o <FaCircle size={5} /> Programmer</Card.Text>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>
        </div>
    )
}
