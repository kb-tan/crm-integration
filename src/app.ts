import './register';

import express from 'express';

import { healthCheckHandler } from './api/healthCheck';
import { smokeTestHandler } from './api/smokeTest';
import { orderHandler } from './api/createOrder';

const app = express()
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  // TODO: consider using a middleware that adds secure HTTP headers.
  // https://github.com/helmetjs/helmet
  .get('/health', healthCheckHandler)
  .get('/smoke', smokeTestHandler)
  .post('/order', orderHandler);

export default app;
