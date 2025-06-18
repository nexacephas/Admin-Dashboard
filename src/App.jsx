import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';

import Email from './pages/Email/Email';
import './index.css';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ChatPage from './pages/ChatPage/ChatPage';
import Charts from './pages/Charts/Charts';
 import CRMPage from './components/CRM/CRMPage'
import Ecommerce from './components/Ecommerce/Ecommerce';
function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/email" element={<Email />} />
            <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/settings" element={<Settings />} />
             <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
             <Route path="/chat" element={<ChatPage />} />
             <Route path="/charts" element={<Charts />} />
              <Route path="/crm" element={<CRMPage />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
