import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { MdVerified } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

function Modals(props) {
    const navigate = useNavigate();

    return (
        <Modal show={props.show} onHide={false} centered>
            <Modal.Body className='text-center py-4'>
                <MdVerified size={60} style={{ color: "#28A745" }} />
                <Modal.Title className='fs-3 mb-3'>{props.text}</Modal.Title>
                <Button onClick={() => {
                    props.setShow(false)
                    navigate(props.page)
                }}>Close</Button>
            </Modal.Body>
        </Modal>
    )
}

export default Modals