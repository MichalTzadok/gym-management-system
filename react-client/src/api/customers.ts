import { User } from "../interfaces/User";
import axiosInstance from './axiosInstance';

// פונקציה לקבלת כל הלקוחות
export const getCustomers = async (): Promise<User[]> => {
  try {
    const response = await axiosInstance.get<User[]>('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching customers:', error);
    throw error; 
  }
};
