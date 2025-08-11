import swaggerJsDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'StayEase API',
      version: '1.0.0',
      description: 'API documentation for StayEase',
    },
  },
  apis: ['./src/routes/*.ts'], // Adjust the path to your route files
};

const specs = swaggerJsDoc(options);

export default specs;