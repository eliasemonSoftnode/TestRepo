import { Request, Response } from 'express';
import getAllTest from '../services/getAllTest';

const controller = async (_req: Request, res: Response) => {
  const allTests = await getAllTest();
  res.send({
    message: 'Test Controller is working!',
    data: allTests,
  });
};

export default controller;
