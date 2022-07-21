import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import { Accordion, Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { AiOutlineRead } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function LandingPage() {
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
        <>
            <NavigationBar />

            <Container>

                {/* Header */}
                <div className="header py-5">
                    <Row xs={1} lg={2} className='justify-content-center align-items-center'>
                        <Col md={5} className='d-flex justify-content-center align-items-center'>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='fw-bolder fs-1'>Never Hesitate to Consult with Doctor</Card.Title>
                                    <Card.Text className='my-3'>
                                        Assertively parallel task team driven delverables with resource-leveling services. Competently transform technically sound strategic theme areas before competitive data.
                                    </Card.Text>
                                    <Button variant="primary">Book Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={5} className='d-flex justify-content-center align-items-center'>
                            <Card.Img variant="top" src="./Image/doctor.png" />
                        </Col>
                    </Row>
                </div>

                {/* Feature */}
                <div className="feature mb-5">
                    <header className='text-center mb-5'>
                        <Card.Text className='my-1'>Why you should trust us?</Card.Text>
                        <Card.Title className='my-2 fw-bold fs-2'>Get to Know About Us</Card.Title>
                    </header>
                    <main>
                        <Row sm={1} md={3} className="gap-4 d-flex justify-content-center align-items-center">
                            {['24/7 Support', 'Private & Secure', 'Million Customers'].map((item, idx) => (
                                <Col md={5} lg={3} key={idx}>
                                    <Card className='text-center d-flex justify-content-center align-items-center p-3'>
                                        <div className='icon-feature'>
                                            <AiOutlineRead size={60} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title className='fw-bold'>{item}</Card.Title>
                                            <Card.Text>
                                                Assertively parallel task team driven delverables with resource-leveling services.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </main>
                </div>

                {/* Feedback */}
                <div className="feedback mb-5">
                    <header className='d-flex justify-content-between'>
                        <Card.Title className='mb-4 fw-bold fs-2'>Start Your <br /> Consultation With Doctor</Card.Title>
                        <div>
                            <MdChevronLeft size={40} className="slider-icon left" onClick={() => sliderEffect('slideLeft')} />
                            <MdChevronRight size={40} className="slider-icon right" onClick={() => sliderEffect('slideRight')} />
                        </div>
                    </header>
                    <div className="feedback-card d-flex" id='slider'>
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Card className='p-2' key={idx}>
                                <Card.Body>
                                    <Card.Text>
                                        Slate helps you see how many more days you need to work to reach your financial goal.
                                    </Card.Text>
                                    <div className='card-profile d-flex gap-3 align-items-center'>
                                        <Card.Img variant="top" src="./Image/doctor.png" />
                                        <div>
                                            <Card.Text className='fw-bold m-0'>Mark Ottonomi</Card.Text>
                                            <Card.Text>20 y.o <FaCircle size={5} /> Programmer</Card.Text>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="faq mb-5">
                    <header className='text-center mb-5'>
                        <Card.Title className='my-2 fw-bold fs-2'>FAQ</Card.Title>
                    </header>
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 4 }).map((_, idx) => (
                            <Col>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Question Item</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container >

            {/* Newsletter */}
            <div className="newsletter mb-5 py-3">
                <Container className='px-5'>
                    <Row xs={1} lg={2} className='justify-content-center align-items-center'>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='fw-bolder'>Get In Touch</Card.Title>
                                    <Card.Text className='my-3'>
                                        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Form className="d-flex justify-content-center">
                                <Form.Control type="search" placeholder="Your Email" />
                                <Button type='submit'>Subscribe</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}