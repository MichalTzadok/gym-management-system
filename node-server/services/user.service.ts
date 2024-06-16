import { Request } from 'express';
import { UserModel } from '../models/user.model';
import { CustomError } from '../types/customError';



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



