import axios from 'axios';
const API_BASE_URL = 'http://localhost:3000';

import { SignInData, SignInResponse, SignUpData, User} from "../interfaces/User";

export const signIn = async (data: SignInData): Promise<User> => {
    try {
        const response = await axios.post<SignInResponse>(`${API_BASE_URL}/signin`, {
            email: data.email,
            password: data.password,
        });
        localStorage.setItem('token', response.data.token);
        return response.data.user;
    } catch (error) {
        console.error('Error in API request for sign in', error);
        throw error;
    }
};


export const signUp = async (data: SignUpData): Promise<User> => {
    try {
      const response = await axios.post<User>(`${API_BASE_URL}/signup`, {
        username: data.username,
        email: data.email,
        password: data.password,
        role: data.role,
      });
      return response.data;
    } catch (error) {
      console.error('Error in API request for sign up', error);
      throw error;
    }
  };