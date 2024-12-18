const swaggerJsDoc = require("swagger-jsdoc");
const authDocs = require("./docs/auth");
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Fitness project backend API Documentation",
    version: "1.0.0",
    description: "API documentation for the fitness project backend",
  },
  servers: [
    {
      url: "http://localhost:5000/api/v1", // Adjust this based on your setup
    },
  ],
  components: {
    securitySchemes: {
      Bearer: {
        type: "http", 
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  },
  security: [
    {
      Bearer: []
    }
  ]
};

const swaggerOptions = {
  swaggerDefinition,
  apis: [], // You can include files here for automatic parsing
};

// Merge paths
swaggerOptions.swaggerDefinition.paths = {
  ...authDocs.paths,
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = swaggerSpec;