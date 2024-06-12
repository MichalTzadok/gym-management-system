import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';

export const signUp = async (req: Request, res: Response) => {
  try {
    const { username, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, email, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json(newUser); 
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const {email,password}=req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    return { user, token };
  } catch (error) {
    console.error('Error signing in:', error);
    throw error; 
  }
};
