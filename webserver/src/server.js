// require: Trae la librería express del npm.
const express = require('express');
const logger = require('./utils/logger.js')
const httpLogger = require('./utils/httpLogger')
const routes = require('./routes');

const port = 3000;
logger.info('Probando los logs');

// Se invoca la función (de la variable express) y se almacena en la variable app.
class Server{
  constructor(){
    this.app=null;
    this.router=null;
    this.initExpress();
    this.initHttpLogger();

    this.start();
  }
  
  initExpress(){
    this.app = express();
    this.router = express.Router();  
  }
  initHttpLogger(){
    this.app.use(httpLogger);
  }
  start(){
    this.app.listen(port,  () => {
      
      logger.info(`Arrancando servidor en http://localhost:${port}`);
      
      
      let rt = new routes(this.app);

    });
    
  };
}




new Server();