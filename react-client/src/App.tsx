import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AdminDashboard from './components/Admin/AdminDashboard';
import Customers from './components/Admin/Customers';
import Services from './components/Admin/Services';
import Meetings from './components/Admin/Meetings';
import  BusinessDetails from "./components/Admin/BusinessDetails";
import  Contact from "./components/User/Contact";
import  AppointmentForm from "./components/User/AppointmentForm";
import  Home from "./components/User/Home";
import MeetingsList  from "./components/User/Meetings";
import  ServicesList from "./components/User/ServicesList";


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<Main />} />
          <Route path="/admin/Customers" element={<Customers />} />
          <Route path="/admin/Services" element={<Services/>} />
          <Route path="/admin/Meetings" element={<Meetings/>} />
          <Route path="/admin/BusinessDetails" element={<BusinessDetails/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/AppointmentForm" element={<AppointmentForm/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/meetings" element={<MeetingsList/>} />
          <Route path="/services" element={<ServicesList/>} />


        </Routes>
      </Router>
    </AuthProvider>
  );
};

const Main: React.FC = () => (
  <div>
    <h1>Welcome to our service</h1>
    <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
  </div>
);

export default App;
