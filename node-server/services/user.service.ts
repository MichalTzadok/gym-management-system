import User from '../models/user.model';

export const addUser = async (username: string, password: string, role: string) => {
  try {
    const newUser = new User({ username, password, role });
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error(`Failed to add user: ${(error as Error).message}`);
  }
};
