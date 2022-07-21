import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './CSS/App.css';
import DashboardPage from './Pages/Auth/DashboardPage';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage replace to="/404" />} />
      </Routes>
    </Router>
  );
}

export default App;
