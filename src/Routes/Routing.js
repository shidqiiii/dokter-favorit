import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DashboardPage from '../Pages/Auth/DashboardPage';
import LandingPage from '../Pages/LandingPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import NotFoundPage from '../Pages/NotFoundPage';
import AppointmentPage from '../Pages/Auth/AppointmentPage';
import DoctorListPage from '../Pages/Auth/DoctorListPage';
import DoctorDetailPage from '../Pages/Auth/DoctorDetailPage';
import HistoryPage from '../Pages/Auth/HistoryPage';
import Cookies from 'js-cookie';

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<NormalRoute Component={LoginPage} />} />
                <Route path="/register" element={<NormalRoute Component={RegisterPage} />} />

                {/* Middleware */}
                <Route path="/dashboard" element={<ProtectedRoute Component={DashboardPage} />} />
                <Route path="/appointment" element={<ProtectedRoute Component={AppointmentPage} />} />
                <Route path="/doctor" element={<ProtectedRoute Component={DoctorListPage} />} />
                <Route path="/doctor/:key" element={<ProtectedRoute Component={DoctorDetailPage} />} />
                <Route path="/history" element={<ProtectedRoute Component={HistoryPage} />} />

                <Route path="*" element={<NotFoundPage replace to="/404" />} />
            </Routes>
        </Router>
    )
}

const ProtectedRoute = ({ Component }) => {
    const auth = Cookies.get('token')
    // const auth = true; //your logic
    return auth ? <Component /> : <Navigate to="/login" />
}

const NormalRoute = ({ Component }) => {
    const auth = Cookies.get('token')
    // const auth = true; //your logic
    return auth ? <Navigate to="/dashboard" /> : <Component />
}
