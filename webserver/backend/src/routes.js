const logger = require("./utils/logger.js");
const listfiles = require('./utils/listfiles.js');

 class Routes {
  constructor(app) {
    logger.info('Arrancamos rutas');
    this.app = app;
    this.fotoslist = new listfiles().getFilesInFolder("/home/nestor/Imágenes", 0);
    this.getFotos();
    this.getFoto();
  }

    
  getFotos() {
    this.app.get("/fotos", async (req, res) => {
      try {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(
          {
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
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
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