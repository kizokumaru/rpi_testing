/*import {Express, Request, Response} from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import {version} from '../../package.json'
import log from './logger'  

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info:{
            title: 'Rest api docs',
            version
        },
        components:{
            securitySchemas:{
                bearerAuth:{
                    type:"http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth:[],
            },
        ],
    },
    apis: ["./src/routes.js", "./src/schema.js"]
};

const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs(app: Express, port:number){
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

    app.get('docs.json', (req:Request, res:Respones) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

    log.info(`Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;*/