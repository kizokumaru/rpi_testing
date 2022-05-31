// require: Trae la librería express del npm.
import express, { Router} from 'express';
import logger from './utils/logger.js';
import httpLogger from './utils/httpLogger.js';
import pathserver from './utils/config.js';
import routes from './routes.js';
import { join } from 'node:path';

const port = 3005;


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
    this.router = Router();  
  }
  initAccesPublicFolder(){
    console.log('pathserver: '  +pathserver)
    console.log('pathserver + public'+join(pathserver + '/public'));
    this.app.use(express.static(join(pathserver + '/public')));
    this.app.use(express.static(join(pathserver + '/database')));
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