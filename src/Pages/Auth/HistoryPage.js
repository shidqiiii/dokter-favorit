import Cookies from 'js-cookie';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap'
import { BaseApi } from '../../API/BaseApi';
import Template from '../../Components/Dashboard Page/Template'
import { connect } from "react-redux";

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
                                        <th>Status Pembayaran</th>
                                        <th>Price</th>
                                        <th>Tanggal & Jam</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {HistoryList.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                {"Dr " + DoctorList.filter(e => e.id === 2).map(e => e.name)
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
                                                    <Button size="sm">Pembayaran</Button>
                                                    <Button size="sm">Detail</Button>
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
