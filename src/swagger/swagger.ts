import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'StayEase API',
      version: '1.0.0',
      description: 'API documentation for the StayEase booking platform',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server'
      }
    ],
  },
  apis: ['./src/routes/*.ts'], // Scan route files for JSDoc annotations
};

const specs = swaggerJSDoc(options);
export default specs;