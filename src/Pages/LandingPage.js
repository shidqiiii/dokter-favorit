import React from 'react'
import NavigationBar from '../Components/NavigationBar'
import { Accordion, Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { AiOutlineRead, AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";

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

            {/* Header */}
            <div id='header' className="py-5">
                <Container>
                    <Row xs={1} lg={2} className='justify-content-center align-items-center'>
                        <Col md={6} className='d-flex justify-content-center align-items-center'>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='fw-bolder fs-1'>Never Hesitate to Consult with Doctor</Card.Title>
                                    <Card.Text className='my-3'>
                                        Assertively parallel task team driven delverables with resource-leveling services. Competently transform technically sound strategic theme areas before competitive data.
                                    </Card.Text>
                                    <Button>Request an Appoitments</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className='card-image d-flex justify-content-center align-items-center'>
                            <Card.Img variant="top" src="./Image/doctor.png" className='px-5 pt-3' />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Feature */}
            <div id='feature' className="py-5">
                <Container>
                    <header className='text-center mb-5'>
                        <Card.Text className='mb-1'>Why you should trust us?</Card.Text>
                        <Card.Title className='my-2 fw-bold fs-2'>Get to Know About Us</Card.Title>
                    </header>
                    <main>
                        <Row sm={1} md={3} className="gap-4 d-flex justify-content-center align-items-center">
                            {['24/7 Support', 'Private & Secure', 'Million Customers'].map((item, idx) => (
                                <Col md={6} lg={3} key={idx}>
                                    <Card className='text-center d-flex justify-content-center align-items-center p-3'>
                                        <div className='icon-feature'>
                                            <AiOutlineRead size={50} className='icon' />
                                        </div>
                                        <Card.Body>
                                            <Card.Title className='fw-bold'>{item}</Card.Title>
                                            <Card.Text>
                                                They come to be part medinik proffesional & diverse health care.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </main>
                </Container>
            </div>

            {/* Feedback */}
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

            {/* FAQ */}
            <div id='faq' className="mb-5">
                <Container>
                    <header className='text-center mb-5'>
                        <Card.Title className='my-2 fw-bold fs-2'>FAQ</Card.Title>
                        <Card.Text className='mb-1'>What questions are popularly asked?</Card.Text>
                    </header>
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 8 }).map((_, idx) => (
                            <Col>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <div>
                                                <Card.Title>Lorem ipsum dolor</Card.Title>
                                                <Card.Text>Lorem ipsum dolor sit amet</Card.Text>
                                            </div>                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>


            {/* Newsletter */}
            <div id='newsletter' className="py-5">
                <Container >
                    <Row xs={1} lg={2} className='justify-content-center align-items-center'>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='fw-bolder fs-3'>Get In Touch</Card.Title>
                                    <Card.Text >
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

            {/* Footer */}
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
        </>
    )
}