import dotenv from 'dotenv';
import http from 'http';
import config from 'config';
import app from './app/app';

dotenv.config();

const server: http.Server = http.createServer(app);
const PORT = config.get('port') || 4000;

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

export default {
  server,
};
