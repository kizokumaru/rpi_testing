const logger = require("./utils/logger.js");
const listfiles = require('./utils/listfiles.js');

 class Routes {
  constructor(app) {
    logger.info('Arrancamos rutas');
    this.app = app;
    this.getRoot();
    this.getCursos();
    this.getFotos();
  }

  getRoot() {
    this.app.get('/', function (req, res) {
      res.status(200).sendFile(__dirname + "/index.html");
      console.log("Página de inicio...")
    })
  }

  getCursos() {
    this.app.get('/cursos', function (req, res) {
      res.send('Estos son los cursos');
      console.log("Página de cursos");
    })
  }
  
  getFotos() {
    this.app.get("/fotos", async (req, res) => {
      try {
        let lf = new listfiles();
        let fotoslist = lf.getFilesInFolder("/home/nestor/Imágenes", 0);
        res.status(200).json({
          data: fotoslist
        });
      } catch (err) {
        res.status(400).json({
          message: "Some error occured",
          err
        });
      }
    })
  }

  /*getFoto(){
    this.app.get("/fotos/:id", async (req, res) => {
      let { id } = req.params;
      id = Number(id);
      try {
        let player = players.find(player => player._id === id);
        res.status(200).json({
          data: player
        });
      } catch (err) {
        res.status(400).json({
          message: "Some error occured",
          err
        });
      }
    });
  }*/
}
module.exports = Routes;