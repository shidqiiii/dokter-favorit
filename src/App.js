import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './Pages/Auth/DashboardPage';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import NotFoundPage from './Pages/NotFoundPage';
import AppointmentPage from './Pages/Auth/AppointmentPage';
import DoctorListPage from './Pages/Auth/DoctorListPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />
        <Route path="/Appointment" element={<AppointmentPage />} />
        <Route path="/doctor" element={<DoctorListPage />} />
        <Route path="*" element={<NotFoundPage replace to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
