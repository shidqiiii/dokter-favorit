import Cookies from 'js-cookie';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import { BaseApi } from '../../API/BaseApi';
import Template from '../../Components/Dashboard Page/Template'
import { connect } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';

function HistoryPage(props) {
    const handleProfile = () => {
        let data = Cookies.get('data');
        data = JSON.parse(data)
        return data;
    }

    const [HistoryList, setHistoryList] = useState([]);

    const handleAppointment = async (id) => {
        const data = await BaseApi.GetAppointment(id);
        if (data.status === "SUCCESS") {
            setHistoryList(data.data);
        } else if (data.error === "FAIL") {
            setHistoryList([])
        }
    };

    const [DoctorList, setDoctorList] = useState([]);

    const handleDoctors = async (id) => {
        const data = await BaseApi.GetAllDoctors(id);
        if (data.error === "SUCCESS") {
            setDoctorList(data.data);
        } else if (data.error === "FAIL") {
            setDoctorList([])
        }
    };

    useEffect(() => {
        handleAppointment(handleProfile().id)
        handleDoctors("")
    }, [])

    const navigate = useNavigate();
    const navigateToPage = (page, key) => {
        switch (page) {
            case 'DetailHistory':
                navigate(`/history/${key}`);
                break;

            case 'Payment':
                navigate(`/payment/${key}`);
                break;

            default:
                break;
        }
    };

    const content = () => {
        return (
            <div className="history">
                <Container>
                    <Card>
                        <Card.Body>
                            <Card.Title>History</Card.Title>
                            <Table hover className='text-center'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nama Doctor</th>
                                        <th>Department</th>
                                        <th>Status Payment</th>
                                        <th>Total Payment</th>
                                        <th>Date & Time</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {HistoryList.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                {"Dr " + DoctorList.filter(e => e.id === item.id_doctor).map(e => e.name)
                                                }
                                            </td>
                                            <td>
                                                {"Department " + props.departmentsReducer.filter(e => e.id === item.id_department).map(e => e.name)
                                                }
                                            </td>
                                            <td>{item.is_paid ? "sudah" : "belum"}</td>
                                            <td>{"Rp " + item.total?.toLocaleString('id-ID') || ''}</td>
                                            <td>{moment(item.start).format("DD MMM YYYY hh:mm") + "-" + moment(item.end).format("hh:mm")}</td>
                                            <td>
                                                <div className='d-flex align-items-center justify-content-center gap-2'>
                                                    <Button
                                                        size="sm"
                                                        onClick={() => navigateToPage("Payment", item.id)}
                                                    >
                                                        Pembayaran</Button>
                                                    <Button
                                                        size="sm"
                                                        onClick={() => navigateToPage("DetailHistory", item.id)}
                                                    >
                                                        Detail</Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }

    return (
        <Template content={content()} />
    )
}

const mapStateToProps = state => ({
    departmentsReducer: state.departmentsReducer
});

export default connect(mapStateToProps)(HistoryPage);
