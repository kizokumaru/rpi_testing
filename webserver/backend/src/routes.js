const logger = require("./utils/logger.js");
const listfiles = require('./utils/listfiles.js');

 class Routes {
  constructor(app) {
    logger.info('Arrancamos rutas');
    this.app = app;
    this.fotoslist = new listfiles().getFilesInFolder("/home/nestor/Imágenes", 0);
    this.getRoot();
    this.getCursos();
    this.getFotos();
    this.getFoto();
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
        res.status(200).json({
          data: this.fotoslist
        });
      } catch (err) {
        res.status(400).json({
          message: "Some error occured",
          err
        });
      }
    })
  }

  getFoto(){
    this.app.get("/fotos/:id", async (req, res) => {
      let { id } = req.params;
      id = Number(id);
      try {
        let foto = this.fotoslist.find(foto => foto._id === id.toString());
        res.status(200).json({
          data: foto
        });
      } catch (err) {
        res.status(400).json({
          message: "Some error occured",
          err
        });
      }
    });
  }
}
module.exports = Routes;