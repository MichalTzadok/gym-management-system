// // src/api/business.ts

// import axios from 'axios';

// export interface BusinessData {
//   name: string;
//   description: string;
//   address: string;
//   phone: string;
//   userId: string;
// }

// export const createBusiness = async (businessData: BusinessData): Promise<void> => {
//   try {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       throw new Error('No token available');
//     }

//     const response = await axios.post('http://localhost:3000/businesses', businessData, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
    
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // You can add more functions like getBusiness, updateBusiness, deleteBusiness, etc.
