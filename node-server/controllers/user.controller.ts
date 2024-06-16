import { Response, Request } from 'express';
import { getUser, getUsers} from '../services/user.service';
import { CustomError } from '../types/customError';


export const get_user = async (req: Request, res: Response) => {
    try {
        const user = await getUser(req);
        console.log(user);
        return res.status(200).json({ user });
    } catch (error) {
        console.error('Error getting user:', error);
        return res.status((error instanceof CustomError && error.code) || 500).json({ message: error instanceof CustomError && error.message || 'An error occurred while getting the user' });
    }
};

export const get_users = async (req: Request, res: Response) => {
    try {
        
        const users = await getUsers();
        console.log(users);
        return res.status(200).json({ users });
    } catch (error) {
        console.error('Error getting users:', error);
        return res.status((error instanceof CustomError && error.code) || 500).json({ message: error instanceof CustomError && error.message || 'An error occurred while getting the users' });
    }};