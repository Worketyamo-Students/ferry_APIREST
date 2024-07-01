import compression from 'compression';
// src/server.ts
// Configurations de Middlewares
import express from 'express';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';

import {
  ONE_HUNDRED,
  SIXTY,
} from './core/constants';
import router from './routes/projets.routes';
import { setupSwagger } from './swagger';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(
	rateLimit({
		max: ONE_HUNDRED,
		windowMs: SIXTY,
		message: 'Trop de Requete à partir de cette adresse IP '
	})
);

app.use(morgan('combined'));
app.use(router)
setupSwagger(app);
export default app;
