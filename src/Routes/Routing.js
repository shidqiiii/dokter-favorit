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
import HistoryDetailPage from '../Pages/Auth/HistoryDetailPage';
import PaymentPage from '../Pages/Auth/PaymentPage';

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path="/login" element={
                    <NormalRoute>
                        <LoginPage />
                    </NormalRoute>} />

                <Route path="/register" element={
                    <NormalRoute>
                        <RegisterPage />
                    </NormalRoute>} />

                {/* Auth */}
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                        <DashboardPage />
                    </ProtectedRoute>} />

                <Route path="/appointment" element={
                    <ProtectedRoute>
                        <AppointmentPage />
                    </ProtectedRoute>} />

                <Route path="/doctor" element={
                    <ProtectedRoute>
                        <DoctorListPage />
                    </ProtectedRoute>} />

                <Route path="/doctor/:key" element={
                    <ProtectedRoute>
                        <DoctorDetailPage />
                    </ProtectedRoute>} />

                <Route path="/history" element={
                    <ProtectedRoute>
                        <HistoryPage />
                    </ProtectedRoute>} />

                <Route path="/history/:key" element={
                    <ProtectedRoute>
                        <HistoryDetailPage />
                    </ProtectedRoute>} />

                <Route path="/payment/:key" element={
                    <ProtectedRoute>
                        <PaymentPage />
                    </ProtectedRoute>} />

                <Route path="*" element={<NotFoundPage replace to="/404" />} />
            </Routes>
        </Router>
    )
}

const ProtectedRoute = (props) => {
    const data = JSON.parse(Cookies.get('data'))
    const auth = data.token

    return auth ? props.children : <Navigate to="/login" />
}

const NormalRoute = (props) => {
    const data = JSON.parse(Cookies.get('data'))
    const auth = data.token

    return auth ? <Navigate to="/dashboard" /> : props.children
}
