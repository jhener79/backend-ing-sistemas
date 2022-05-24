const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');



const options = {
    definition: {
        openapi: "3.0.0",
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

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

 // Settings
app.set('port', 5000);

 // Middlewares
 app.use(express.json());

 // Routes
app.use('/api/company', require('./src/routes/company'));
app.use('/api/position',require('./src/routes/position'));
app.use('/api/candidate', require('./src/routes/candidate'));

// Starting Server
app.listen(app.get('port'), () => {
    console.log('Server on port 5000');
});