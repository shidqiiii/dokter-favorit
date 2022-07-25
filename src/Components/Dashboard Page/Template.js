import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineDashboard, AiOutlineSchedule, AiOutlineUnorderedList, AiOutlineHistory } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import '../../CSS/Dashboard Page/DashboardPage.css';
import { Card, Dropdown, DropdownButton, Navbar } from 'react-bootstrap';

export default function Template(props) {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
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
            path: "/payment",
            name: "Payment",
            icon: <MdPayment />
        },
        {
            path: "/history",
            name: "History",
            icon: <AiOutlineHistory />
        },
    ]
    return (
        <div className="dashboard d-flex">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="header text-center py-5" style={{ display: isOpen ? "block" : "none" }}>
                    <Card.Title className="logo">DoctorFav</Card.Title>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link align-items-center my-2 gap-3" activeclassName="active" >
                            <div className="icon fs-6"> {item.icon}</div>
                            <Card.Text className='fs-6' style={{ display: isOpen ? "block" : "none" }}>{item.name}</Card.Text>
                        </NavLink>
                    ))
                }
            </div>
            <main>
                <Navbar className='mb-3 px-4 py-3 justify-content-between'>
                    <div className='icon-nav'>
                        <FaBars onClick={toggle} size={20} />
                    </div>
                    <DropdownButton id="dropdown-item-button" title="Dropdown button" align="end">
                        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                        <Dropdown.Item as="button">Action</Dropdown.Item>
                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                    </DropdownButton>
                </Navbar>
                {props.content}
            </main>
        </div>
    );
}
