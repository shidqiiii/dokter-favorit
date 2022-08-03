import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineDashboard, AiOutlineSchedule, AiOutlineUnorderedList, AiOutlineHistory } from "react-icons/ai";
import { RiHospitalLine } from "react-icons/ri";
import { NavLink, useNavigate } from 'react-router-dom'
import '../../CSS/Dashboard Page/DashboardPage.css';
import { Card, Dropdown, DropdownButton, Navbar } from 'react-bootstrap';
import Cookies from 'js-cookie';
import Navbars from './Navbars';
import Sidebar from './Sidebar';

export default function Template(props) {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    const navigate = useNavigate();

    const handleProfile = () => {
        let data = Cookies.get('data');
        data = JSON.parse(data)
        return data;
    }

    const handleSignOut = () => {
        Cookies.remove('data');
        navigate('/login');
    }

    return (
        <div className="dashboard d-flex">
            <Sidebar
                isOpen={isOpen}
            />
            <main>
                <Navbars
                    toggle={toggle}
                    handleProfile={handleProfile().name}
                    handleSignOut={handleSignOut}
                />

                {props.content}
            </main>
        </div >
    );
}
