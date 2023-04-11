import { Router } from 'express';
import testController from '../../../../lib/test/controllers/test.controller';
import createController from '../../../../lib/test/controllers/create.controller';
import deleteController from '../../../../lib/test/controllers/delete.controller';

const router = Router();

router.get('/test', testController);

router.post('/test', createController);

router.delete('/test', deleteController);

router.put('/test', (_req, res) => {
  res.send({
    message: 'Put route is working',
  });
});

export default router;
