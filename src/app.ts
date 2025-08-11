import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import specs from './utils/swagger';

dotenv.config();

const app = express();
app.use(express.json());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// API Routes


// Root health check
app.get('/', (req, res) => res.send('StayEase API is running'));

export default app;