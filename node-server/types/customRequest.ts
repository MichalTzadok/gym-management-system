import { IUser } from '../models/user.model';
import { Request} from 'express'

export interface AuthenticatedRequest extends Request {
  user?: IUser;  
}