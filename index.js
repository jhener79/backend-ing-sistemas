const express = require('express');
require('dotenv').config();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


// Definiendo parametros de configuracion para Swagger
const options = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: 'Portal de Empleos API',
            version: '1.0.0',
            description: 'CRUD para portal de Empleos'
        },
        servers: [
            {
                url: "http://localhost:5000"
            }
        ],
    },
    apis: ["./src/routes/*.js"],
}

const specs = swaggerJsDoc(options);

// Inicializando express
const app = express();

// Definiendo la ruta para la documentacion con Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Middlewares
app.use(express.json());

// Routes
app.use('/api/company', require('./src/routes/company'));
app.use('/api/position', require('./src/routes/position'));
app.use('/api/candidate', require('./src/routes/candidate'));


// Starting Server
app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`);
});