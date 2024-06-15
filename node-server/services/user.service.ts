import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request } from 'express';
import { UserModel } from '../models/user.model';
import config from '../config/config';
import User from '../classes/user.class';
import { validateEmail } from '../utils/emailValidator'; 

export const signUp = async (req: Request) => {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password || !role)
        throw new Error('Missing required fields');
    const isEmailValid = await validateEmail(email);
    if (!isEmailValid){      
        throw new Error('Invalid email address');}
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User(username, hashedPassword, email, role);
    try {
        await newUser.save();
    } catch (error) {
        console.error('Error saving user:', error);
        throw new Error('Failed to save user');
    }
    return newUser;
};
export const signIn = async (req: Request) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user)
            throw new Error('User not found');
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            throw new Error('Invalid credentials');
        const token = jwt.sign({ id: user._id, role: user.role }, config.jwtSecret as string, { expiresIn: '1h' });
        return { user, token };
    } catch (error) {
        console.error('Error signing in:', error);
        throw error;
    }
};


