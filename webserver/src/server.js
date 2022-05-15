// require: Trae la librería express del npm.
var express = require('express');
var routes = require('./routes');


const port = 3000;

// Se invoca la función (de la variable express) y se almacena en la variable app.
var app = express();


app.listen(port,  () => {
  //logger.info(`App is running at http://localhost:${port}`);

  //await connect();

  routes.routes(app);

//  startMetricsServer();

  //swaggerDocs(app, port);
});