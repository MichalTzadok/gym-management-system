import { Request, Response, NextFunction } from 'express';
import logger from '../logger'; 

export const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    logger.info(`Request: ${req.method} ${req.url}`);
    res.on('finish', () => {
        logger.info(`Response: ${res.statusCode}`);
    });
    next();
};
