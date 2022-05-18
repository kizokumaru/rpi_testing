// require: Trae la librería express del npm.
const express = require('express');
const logger = require('./utils/logger.js')
const httpLogger = require('./utils/httpLogger')
const pathserver = require('./utils/config.js')
const routes = require('./routes');
const path = require('path');

const port = 3001;
logger.info('Probando los logs');

// Se invoca la función (de la variable express) y se almacena en la variable app.
class Server{
  constructor(){
    this.app=null;
    this.router=null;
    this.initExpress();
    this.initHttpLogger();
    this.initAccesPublicFolder();
    this.start();
  }
  
  initExpress(){
    this.app = express();
    this.router = express.Router();  
  }
  initAccesPublicFolder(){
    console.log('pathserver: '  +pathserver)
    console.log('pathserver + public'+path.join(pathserver + '/public'));
    this.app.use(express.static(path.join(pathserver + '/public')));
    //http://localhost:3001/folder1/lasers.jpg - Funciona
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