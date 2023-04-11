import { Router } from 'express';

const router = Router();

router.get('/demo', (_req, res) => {
  res.send({
    data: 'Here is your data',
  });
});

router.post('/demo', (_req, res) => {
  res.send({
    data: 'demo created!',
  });
});

router.delete('/demo', (_req, res) => {
  res.send({
    data: 'demo deleted!',
  });
});

export default router;
