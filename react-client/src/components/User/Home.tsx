import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h2>Welcome to Our Service Management System</h2>
      <p>Here you can book appointments and manage your services.</p>
      <Link to="/AppointmentForm">Book an Appointment</Link>
      <br />
      <Link to="/meetings">View Your Meetings</Link>
      <br />
      <Link to="/services">View Services</Link>
    </div>
  );
};

export default Home;
