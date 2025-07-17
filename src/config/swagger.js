const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "authenticate_JWT",
    version: "1.0.0",
    description: "you can see and test all of the api about this authenticate system project",
  },
  servers: [],
};

const options = {
  swaggerDefinition,
  apis:[process.cwd()+"/src/swagger/*.js"]
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
