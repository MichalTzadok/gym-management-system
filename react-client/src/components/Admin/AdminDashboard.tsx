import React from 'react';
import BusinessDetails from './BusinessDetails';
// import Services from './Services';
// import Appointments from './Appointments';
// import Customers from './Customers';

const AdminDashboard: React.FC = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      { <BusinessDetails />}
    </div>
  );
};

export default AdminDashboard;
