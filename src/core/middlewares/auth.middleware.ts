import { NextFunction, Request, Response } from 'express';
import { DataStoredInToken } from '../interfaces/auth.interface';
import { Logger } from '../utils';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'No token, authorization denied.' });

  try {
    const user = jwt.verify(token, process.env.JWT_TOKEN_SECRET ?? '') as DataStoredInToken;

    if (!req.user) req.user = { id: '' };

    req.user.id = user.id;
    next();
  } catch (error) {
    Logger.error(`[ERROR][${req.socket.remoteAddress}] - Message: ${error}`);
    res.status(401).json({ message: 'Token is not valid' });
  }
};
export default authMiddleware;
