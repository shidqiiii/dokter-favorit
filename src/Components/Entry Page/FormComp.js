import React from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import '../../CSS/Entry Page/EntryPage.css';

export default function FormComp(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const formTemplate = (headerTitle, headerCaption, buttonText, text, hrefText, additionalForm, href) => {
        return (
            <Form onSubmit={handleSubmit}>
                <header className='mb-3 text-center'>
                    <Card.Title className='fw-bold fs-2 my-0'>
                        {headerTitle}
                    </Card.Title>
                    <Card.Text>
                        {headerCaption}
                    </Card.Text>
                </header>

                <Form.Group className="mb-3">
                    <Form.Label className='fw-bold'>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='fw-bold'>Password</Form.Label>
                    <Form.Control type="password" placeholder="*******" />
                </Form.Group>

                {additionalForm}

                <Form.Group className="mt-4 mb-3">
                    <Form.Control type="submit" value={buttonText} />
                </Form.Group>

                <Card.Text className='text-center'>{text} have an account? <a href={`/${href}`}>
                    {hrefText}
                </a>
                </Card.Text>
            </Form >
        )
    }

    return (
        <div className="entry">
            {console.log(props.ui.href)}
            <Container>
                <Card className='mx-5 shadow-lg'>
                    <Row className='d-flex align-items-center justify-content-center py-5'>
                        <Col sm={10} lg={5} className='my-auto px-5'>
                            {formTemplate(props.ui.headerTitle, props.ui.headerCaption, props.ui.buttonText, props.ui.text, props.ui.hrefText, props.ui.additionalForm, props.ui.href)}
                        </Col>
                        <Col sm={10} lg={5} className='d-flex align-items-center justify-content-center'>
                            <Card.Img variant="top" src="./Image/login-illustrator.png" />
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}
