import { Application } from 'express';
import { RoutesType } from '../interface';

const combineRoutes = (
  app: Application,
  routes: RoutesType[],
  version: string,
) => {
  routes.forEach((route) => {
    app.use(`/api/${version}`, route.route);
  });
};

export default combineRoutes;
