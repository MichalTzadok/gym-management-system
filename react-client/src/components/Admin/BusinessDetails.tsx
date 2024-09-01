import React from 'react';

const BusinessDetails: React.FC = () => {
  return (
    <div>
      <h2>Business Details</h2>
      <p>Address: 123 Main St</p>
      <p>Contact: 123-456-7890</p>
      <p>Email: business@example.com</p>
    </div>
  );
};

export default BusinessDetails;
// src/components/CreateBusiness.tsx

// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { createBusiness, BusinessData } from '../../api/apiBusiness';

// const CreateBusiness: React.FC = () => {
//   const [formData, setFormData] = useState<BusinessData>({
//     name: '',
//     description: '',
//     address: '',
//     phone: '',
//     userId: ''
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       const data = await createBusiness(formData);
//       console.log(data);
//       alert('Business created successfully!');
//     } catch (error) {
//       console.error('Error creating business:', error);
//       alert('Error creating business');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
//       </div>
//       <div>
//         <label htmlFor="description">Description:</label>
//         <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} required />
//       </div>
//       <div>
//         <label htmlFor="address">Address:</label>
//         <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
//       </div>
//       <div>
//         <label htmlFor="phone">Phone:</label>
//         <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
//       </div>
//       <div>
//         <label htmlFor="userId">User ID:</label>
//         <input type="text" id="userId" name="userId" value={formData.userId} onChange={handleChange} required />
//       </div>
//       <button type="submit">Create Business</button>
//     </form>
//   );
// };

// export default CreateBusiness;
