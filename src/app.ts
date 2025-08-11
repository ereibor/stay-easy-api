import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import specs from './swagger/swagger';
import propertyRoutes from './routes/propertyRoutes';
import bookingRoutes from './routes/bookingRoutes';

dotenv.config();

const app = express();
app.use(express.json());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// API Routes
app.use('/properties', propertyRoutes);
app.use('/bookings', bookingRoutes);

// Root health check
app.get('/', (req, res) => res.send('StayEase API is running'));

export default app;