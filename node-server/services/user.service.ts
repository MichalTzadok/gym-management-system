import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request } from 'express';
import { UserModel } from '../models/user.model';
import config from '../config/config';
import { validateEmail } from '../utils/emailValidator'; 
import { CustomError } from '../types/custonError';

export const signUp = async (req: Request) => {
  const { username, email, password, role } = req.body;
  if (!username || !email || !password || !role)
      throw new CustomError('Missing required fields',400);
  // const isEmailValid = await validateEmail(email);
  // if (!isEmailValid)
  //     throw new CustomError('Invalid email address',422);
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({
      username: username,
      password: hashedPassword,
      email: email,
      role: role
  });
  try {
      await newUser.save();
  } catch (error) {
      console.error('Error saving user:', error);
      throw new CustomError('Failed to save user',500);
  }
  return newUser;
};
export const signIn = async (req: Request) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });       
    if (!user)
        throw new CustomError('User not found',404);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
        throw new CustomError('Invalid credentials',401);
    const token = jwt.sign({ id: user._id, role: user.role }, config.jwtSecret as string, { expiresIn: '1h' });
    return { user, token };
} catch (error) {
    console.error('Error signing in:', error);
    throw error;
}
};


export const getUsers = async () => {
  try {
      const users = await UserModel.find();
      console.log(users);
      
      return users

  } catch (error) {
      console.error('Error fetching users:', error);
      throw new CustomError('Failed to fetch users',500);
  }
};

export const getUser = async (req: Request) => {
  const { id } = req.params;

  try {
      const user = await UserModel.findById(id);

      if (!user) {
          throw new CustomError( 'User not found' ,404);
      }
      return user

  } catch (error) {
      console.error('Error fetching user:', error);
      throw new CustomError( 'Failed to fetch user',500);
  }
};



