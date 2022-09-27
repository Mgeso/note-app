import express from 'express';
import compression from 'compression';
import cors from 'cors';
import database from '../config/db.config.js';
import errorHandler from './error.handler.js';
import router from '../routes/index.routes.js';

const middleware = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
   app.use(cors());
  database();
  app.use(router);
 app.use(compression);
 
 app.use(errorHandler);
};

export default middleware;