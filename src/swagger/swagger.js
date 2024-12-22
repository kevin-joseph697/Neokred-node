const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.3' });

const outputFile = './swagger_output.json';
const endpointsFiles = ['index.js'];

const doc = {
    info: {
      version: '1.0',
      title: 'Markdown editor',
    },
    servers: [
      {
        url: 'http://localhost:3001/',
      }
    ],
  };

  swaggerAutogen(outputFile, endpointsFiles, doc);