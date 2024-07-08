// import React, { useState, useEffect } from 'react';
// import { getCustomers, deleteCustomer } from '../../api/apiCustomers';

// const Customers: React.FC = () => {
//   const [customers, setCustomers] = useState([]);
//   const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '' });

//   useEffect(() => {
//     // Fetch customers
//     getCustomers().then(setCustomers);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setNewCustomer({ ...newCustomer, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Add new customer
//     // Assuming the API supports adding customers
//   };

//   const handleDelete = (id: string) => {
//     // Delete customer
//     deleteCustomer(id).then(() => setCustomers(customers.filter(customer => customer.id !== id)));
//   };

//   return (
//     <div>
//       <h2>Customers</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={newCustomer.name}
//           onChange={handleChange}
//           placeholder="Name"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={newCustomer.email}
//           onChange={handleChange}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="text"
//           name="phone"
//           value={newCustomer.phone}
//           onChange={handleChange}
//           placeholder="Phone"
//           required
//         />
//         <button type="submit">Add Customer</button>
//       </form>
//       <ul>
//         {customers.map(customer => (
//           <li key={customer.id}>
//             {customer.name} - {customer.email} - {customer.phone}
//             <button onClick={() => handleDelete(customer.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Customers;