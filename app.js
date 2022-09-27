/* eslint-disable import/first */
/* eslint-disable import/extensions */
import 'express-async-errors';
import express from 'express';
import dotenv from 'dotenv';
import pino from 'pino';

dotenv.config();

import middleware from './middlewares/middleware.js';

const app = express();

middleware(app);

const logger = pino();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  logger.info('Server is listening on port', port);
});
