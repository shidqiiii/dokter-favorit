import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Card, Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BaseApi } from '../../API/BaseApi';
import Template from '../../Components/Dashboard Page/Template'

function HistoryDetailPage(props) {
    const { key } = useParams();

    const [historyDetail, setHistoryDetail] = useState(null);
    const [DoctorList, setDoctorList] = useState(null);

    const handleHistoryDetail = async (id) => {
        const data = await BaseApi.GetDetailAppointment(id);
        if (data.status === "SUCCESS") {
            setHistoryDetail(data.data);
            handleDoctors(data.data.id_doctor)
        } if (data.error === "FAIL") {
            setHistoryDetail(null);
        }
    };

    const handleDoctors = async (id) => {
        const data = await BaseApi.GetDetailDoctor(id);
        if (data.error === "SUCCESS") {
            setDoctorList(data.data);
        } else if (data.error === "FAIL") {
            setDoctorList(null)
        }
    };

    useEffect(() => {
        handleHistoryDetail(key);
    }, [key]);

    const handleTable = () => {
        let result

        if (historyDetail !== null) {
            result = (<Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th colSpan={2} className='text-center'>Information</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Doctor</td>
                        <td> Dr. {DoctorList !== null ? (DoctorList[0].name) : ("")}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Department</td>
                        <td> Department {props.departmentsReducer.filter(e => e.id === historyDetail.id_department).map(e => e.name)
                        }</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Date & Time</td>
                        <td> {moment(historyDetail.start).format("DD MMMM YYYY hh:mm") + "-" + moment(historyDetail.end).format("hh:mm")}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Notes</td>
                        <td>{historyDetail.catatan_keluhan}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Total Payment</td>
                        <td>Rp {historyDetail.total?.toLocaleString('id-ID') || ''}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Payment Status</td>
                        <td>{historyDetail.is_paid ? "paid" : "not paid"}</td>
                    </tr>
                </tbody>
            </Table>
            )
        }

        return result
    }

    const content = () => {
        return (
            <div className="history-detail">
                <Container>
                    <Card>
                        <Card.Body>
                            <Card.Title className='mb-3'>History Appointment</Card.Title>

                            {handleTable()}
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

export default connect(mapStateToProps)(HistoryDetailPage);
