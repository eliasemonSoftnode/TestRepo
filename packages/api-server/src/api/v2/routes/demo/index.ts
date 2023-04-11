import { Router } from 'express';

const router = Router();

router.get('/demo', (_req, res) => {
  res.send({
    data: 'Here is your data V2',
  });
});

router.post('/demo', (_req, res) => {
  res.send({
    data: 'demo created V2!',
  });
});

router.delete('/demo', (_req, res) => {
  res.send({
    data: 'demo deleted V2!',
  });
});

export default router;
