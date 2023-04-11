import { Request, Response } from 'express';
import deleteTest from '../services/deleteTest';

const controller = async (req: Request, res: Response) => {
  await deleteTest(req.body.id);
  res.send({
    message: `Test Controller ${req.body.id} is deleted!`,
  });
};

export default controller;
