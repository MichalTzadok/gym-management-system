import axios from 'axios';
import { SignInData, SignInResponse, SignUpData, User} from "../interfaces/User";

export const signIn = async (data: SignInData): Promise<SignInResponse> => {
    try {
        const response = await axios.post<SignInResponse>('http://localhost:3000/signin', {
            email: data.email,
            password: data.password,
        });
        return response.data;
    } catch (error) {
        console.error('Error in API request for sign in', error);
        throw error;
    }
};


export const signUp = async (data: SignUpData): Promise<User> => {
    try {
      const response = await axios.post<User>('http://localhost:3000/signup', {
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