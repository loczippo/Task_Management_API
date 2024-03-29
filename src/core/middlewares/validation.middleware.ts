import { NextFunction, Request, RequestHandler, Response } from 'express';
import { ValidationError, validate } from 'class-validator';

import { HttpException } from '../../core/exceptions';
import { plainToInstance } from 'class-transformer';

const validationMiddleware = (type: any, skipMissingProperties = false): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    validate(plainToInstance(type, req.body), { skipMissingProperties }).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const messages = errors
          .map((error: ValidationError) => {
            return Object.values(error.constraints!);
          })
          .join(',')
          .replaceAll(',', ', ');
        next(new HttpException(400, messages));
      } else {
        next();
      }
    });
  };
};

export default validationMiddleware;
