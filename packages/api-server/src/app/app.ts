import express from 'express';
import path from 'path';
import cors from 'cors';
import { initRoutes } from '../utils';

// Express Application
const app: express.Express = express();

// Body Parser
app.use(express.json());

// cors
app.use(cors());

// Static Serve
app.use(express.static(path.join(__dirname, '../../src/public')));

// Init all routes
initRoutes(app);

export default app;
