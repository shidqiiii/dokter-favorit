import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { BaseApi } from '../../API/BaseApi';
import Template from '../../Components/Dashboard Page/Template'
import { connect } from "react-redux";
import FormGroupSelect from '../../Components/Form/FormGroupSelect';
import FormGroupControl from '../../Components/Form/FormGroupControl';

function DoctorListPage(props) {
    const navigate = useNavigate();
    const navigateToDoctorDetail = (key) => {
        navigate(`/doctor/${key}`);
    };

    const [DoctorList, setDoctorList] = useState(null);
    const [idDepartments, setidDepartments] = useState(1);

    const handleDoctorsPerDepartments = async (id) => {
        const data = await BaseApi.GetAllDoctors(id);
        if (data.error === "SUCCESS") {
            setDoctorList(data.data);
        } else if (data.error === "FAIL") {
            setDoctorList(null)
        }
    };

    const SelectDepartment = (id) => {
        setidDepartments(id)
    }

    const handleDoctorList = () => {
        let list

        if (DoctorList !== null) {
            list = <Row xs={1} md={2} lg={3} className="g-3">
                {DoctorList
                    .filter(item =>
                        item.name.toLowerCase().includes(search.toLowerCase()))
                    .map((item) => (
                        <Col key={item.id}>
                            <Card className='p-3'
                                onClick={() => navigateToDoctorDetail(item.id)}>
                                <Card.Body className='p-0 gap-3 d-flex flex-row align-items-center'>
                                    <Card.Img src="./Image/doctor.png" />
                                    <div>
                                        <Card.Title className='fw-bold fs-5 my-1'>Dr. {item.name}</Card.Title>
                                        <Card.Title className='fs-6 my-1'>
                                            Department {props.departmentsReducer.filter(e => e.id === item.id_department).map(e => e.name)
                                            }
                                        </Card.Title>
                                        <Card.Text className=' p-0 m-0'>{item.phone_number}</Card.Text>
                                        <Card.Text className='p-0 m-0'>{item.email}</Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
        }
        else {
            list = <Card className='mt-4 text-center'>
                <Card.Body>
                    <Card.Text>Data tidak ditemukan</Card.Text>
                </Card.Body>
            </Card>
        }

        return list
    }

    useEffect(() => {
        handleDoctorsPerDepartments(idDepartments);

    }, [idDepartments])

    const [search, setSearch] = useState("");

    const content = () => {
        return (
            <div className="doctor-list">
                <Container fluid>
                    <Card>
                        <Card.Body>
                            <Card.Title className='mb-3'>List Doctor</Card.Title>
                            <Form style={{ maxWidth: "22rem" }}>
                                <FormGroupSelect
                                    name="Departement"
                                    onChange={(event) => { SelectDepartment(event.target.value) }}
                                    value={idDepartments}>
                                    {props.departmentsReducer.map(item => (
                                        <option value={item.id} key={item.id}>{item.name}</option>
                                    ))}
                                </FormGroupSelect>

                                <FormGroupControl
                                    name='Search'
                                    type="search"
                                    onChange={(event) => setSearch(event.target.value)} />
                            </Form>
                        </Card.Body>
                    </Card>

                    <div className="doctor-card-list mt-4">
                        {handleDoctorList()}
                    </div>
                </Container >
            </div >
        )
    }

    return (
        <>
            <Template content={content()} />
        </>
    )
}

const mapStateToProps = state => ({
    departmentsReducer: state.departmentsReducer
});

export default connect(mapStateToProps)(DoctorListPage);
