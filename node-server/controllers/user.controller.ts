import { Response, Request } from 'express';
import bodyParser from 'body-parser';
import { signIn, signUp } from '../services/user.service';
import express from 'express';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

export const post_signin = async (req: Request, res: Response) => {
    try {
        const result = await signIn(req,res);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const post_signup = async (req: Request, res: Response) => {
    try {
        const result = await signUp(req,res);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default app;

// export const createUser = async (req: Request, res: Response) => {
//   const { username, password, role } = req.body;
//   try {
//     const newUser = await addUser(username, password, role);
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ message: (error as Error).message });
//   }
// };
