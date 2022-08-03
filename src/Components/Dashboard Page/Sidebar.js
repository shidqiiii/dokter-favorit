import React from 'react'
import { Card } from 'react-bootstrap'
import { AiOutlineDashboard, AiOutlineHistory, AiOutlineSchedule, AiOutlineUnorderedList } from 'react-icons/ai'
import { RiHospitalLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

export default function Sidebar(props) {
    const menuItem = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <AiOutlineDashboard />
        },
        {
            path: "/appointment",
            name: "Appointment",
            icon: <AiOutlineSchedule />
        },
        {
            path: "/doctor",
            name: "Doctor List",
            icon: <AiOutlineUnorderedList />
        },
        {
            path: "/history",
            name: "History",
            icon: <AiOutlineHistory />
        },
    ]

    return (
        <div style={{ width: props.isOpen ? "200px" : "50px" }} className="sidebar">
            <div className="header text-center px-3 py-4">
                <div className="icon"><RiHospitalLine size={props.isOpen ? 30 : 0} /></div>
                <Card.Title className='fs-5 my-2' style={{ display: props.isOpen ? "block" : "none" }}>DoctorFav</Card.Title>
            </div>
            {
                menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className={`d-flex link align-items-center my-2 gap-3 ${({ isActive }) => isActive ? "active" : ''}`} >
                        <div className="icon fs-6"> {item.icon}</div>
                        <Card.Text className='fs-6' style={{ display: props.isOpen ? "block" : "none" }}>{item.name}</Card.Text>
                    </NavLink>
                ))
            }
        </div>
    )
}
