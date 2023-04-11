import { Request, Response } from 'express';
import createTest from '../services/createTest';

const controller = async (req: Request, res: Response) => {
  if (!req.body.data) {
    return res.send({
      message: 'Invalid Input',
      data: [],
    });
  }
  const data = await createTest(req.body.data);
  res.send({
    message: 'Test Controller is created!',
    data,
  });
};

export default controller;
