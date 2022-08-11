import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { BaseApi } from '../../API/BaseApi';
import Template from '../../Components/Dashboard Page/Template';
import FormGroupSelect from '../../Components/Form/FormGroupSelect';
import FormGroupControl from '../../Components/Form/FormGroupControl';
import Loader from '../../Components/Loader';
import FormTemplate from '../../Components/Form/FormTemplate';
import Modals from '../../Components/Modals';

export default function PaymentPage() {
    const { key } = useParams();
    const navigate = useNavigate();

    const [dataPayment, setDataPayment] = useState({
        payment_type: "",
        bank_transfer: "",
        id_appointment: "",
        total: ""
    })

    const [isLoading, setIsLoading] = useState(false)
    const [inputError, setinputError] = useState("")
    const [show, setShow] = useState(false);

    const handleChange = (target, value) => {
        setDataPayment({
            ...dataPayment,
            [target]: value
        });
        setinputError("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            handlePayment()
        }, 1000);

    }

    const handleError = () => {
        if (inputError !== "") {
            return (
                <Alert variant="danger">
                    {inputError}
                </Alert>)
        }
    }

    const handleHistoryDetail = async (id) => {
        const data = await BaseApi.GetDetailAppointment(id);
        if (data.status === "SUCCESS") {
            setDataPayment({
                ...dataPayment,
                id_appointment: data.data.id,
                total: data.data.total
            });
        }
    };

    const handlePayment = async () => {
        const data = await BaseApi.CreatePayment(dataPayment.payment_type, dataPayment.bank, dataPayment.id_appointment, dataPayment.total);
        if (data.status === "SUCCESS") {
            setShow(true);
        } else {
            setinputError(data.message);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        handleHistoryDetail(key);
    }, [key]);

    const handleForm = () => {
        if (!isLoading) {
            return (<>
                <FormGroupSelect
                    name="Payment Method"
                    value={dataPayment.payment_type}
                    onChange={(event) => { handleChange("payment_type", event.target.value) }}>
                    <option value={'Permata'}>Bank Transfer</option>
                </FormGroupSelect>

                <FormGroupSelect
                    name="Bank"
                    value={dataPayment.bank_transfer}
                    disabled={dataPayment.payment_type === "" ? true : false}
                    onChange={(event) => handleChange("bank_transfer", event.target.value)}>
                    <option value="" defaultValue disabled hidden>Select here</option>
                    <option value={'Permata'}>Permata</option>
                    <option value={'BCA'}>BCA</option>
                    <option value={'Mandiri'}>Mandiri</option>
                </FormGroupSelect>

                <FormGroupControl
                    name="Biaya"
                    value={"Rp " + dataPayment.total?.toLocaleString('id-ID') || ''}
                    disabled />

                {handleError()}

                <Form.Control
                    type="Submit"
                    value="Lets Pay!"
                    className='btn-primary p-2 mt-4' />
            </>)
        }
        return <Loader />
    }

    const content = () => {
        return (
            <div className="payment">
                <Container fluid>
                    <Card>
                        <Card.Body>
                            <Card.Title className='mb-3'>Make an Appointment</Card.Title>
                            <FormTemplate
                                handleSubmit={handleSubmit}
                                handleForm={handleForm()} />
                        </Card.Body>
                    </Card>

                    <Modals
                        setShow={setShow}
                        show={show}
                        page={"/history"}
                        text={"Payment Successful!"} />
                </Container>
            </div>
        )
    }

    return (
        <Template content={content()} />
    )
}
