import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineDashboard, AiOutlineSchedule, AiOutlineUnorderedList, AiOutlineHistory } from "react-icons/ai";
import { RiHospitalLine } from "react-icons/ri";
import { NavLink, useNavigate } from 'react-router-dom'
import '../../CSS/Dashboard Page/DashboardPage.css';
import { Card, Dropdown, DropdownButton, Navbar } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { BaseApi } from '../../API/BaseApi';

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
            path: "/history",
            name: "History",
            icon: <AiOutlineHistory />
        },
    ]

    const navigate = useNavigate();

    const handleSignOut = () => {
        Cookies.remove('data');
        navigate('/login');
    }

    return (
        <div className="dashboard d-flex">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="header text-center px-3 py-4">
                    <div className="icon"><RiHospitalLine size={isOpen ? 30 : 0} /></div>
                    <Card.Title className='fs-5 my-2' style={{ display: isOpen ? "block" : "none" }}>DoctorFav</Card.Title>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className={`d-flex link align-items-center my-2 gap-3 ${({ isActive }) => isActive ? "active" : ''}`} >
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
                    <DropdownButton title="Robert Richalisson" align="end">
                        <Dropdown.Item as="button">Profile</Dropdown.Item>
                        <Dropdown.Item as="button" onClick={handleSignOut}>Sign out</Dropdown.Item>
                    </DropdownButton>
                </Navbar>
                {props.content}
            </main>
        </div>
    );
}
