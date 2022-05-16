/*exports.routes = function (app) {

  app.get('/', function (req, res) {
    res.status(200).sendFile(__dirname + "/index.html");
    console.log("Página de inicio...")
  })

  app.get('/cursos', function (req, res) {
    res.send('Estos son los cursos');
    console.log("Página de cursos");
  })

};*/

const logger = require("./utils/logger");

class Routes{
  constructor(app){
    logger.info('Arrancamos rutas');
    this.app = app;
    this.getRoot();
    //this.getCursos();
  }

  getRoot(){
    this.app.get('/', function (req, res) {
      res.status(200).sendFile(__dirname + "/index.html");
      console.log("Página de inicio...")
    })
  }

  getCursos(){
    this.app.get('/cursos', function (req, res) {
      res.send('Estos son los cursos');
      console.log("Página de cursos");
    })
  }
}
module.exports = Routes;