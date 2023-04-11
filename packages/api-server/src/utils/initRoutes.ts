import { Application } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import combineRoutes from './combineRoutes';

const initRoutes = async (app: Application) => {
  fs.readdir(path.join(__dirname, '../api'), async (_err, files) => {
    await Promise.all(
      files.map(async (version) => {
        const module = await import(
          path.join(
            __dirname,
            `../api/${version}/routes/index${path.extname(__filename)}`,
          )
        );

        if (!module.default || !module.default.length) return;
        combineRoutes(app, module.default, version);
      }),
    );
  });
};

export default initRoutes;
