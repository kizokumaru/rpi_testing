// require: Trae la librería express del npm.
var express = require('express');
const logger = require('./utils/logger')
const httpLogger = require('./utils/httpLogger')
var routes = require('./routes');


const port = 3000;
logger.info('Probando los logs');
// Se invoca la función (de la variable express) y se almacena en la variable app.
var app = express();
app.use(httpLogger);

app.listen(port,  () => {
  //logger.info(`App is running at http://localhost:${port}`);
  logger.error('Probando los logs');
  //await connect();

  routes.routes(app);

//  startMetricsServer();

  //swaggerDocs(app, port);
});