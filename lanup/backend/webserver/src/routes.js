import logger from './utils/logger.js';
import listfiles from './utils/listfiles.mjs';
import fs from 'node:fs';
import Mapperlan from "../src/utils/mapperlan.mjs";



class Routes {
  constructor(app) {
    logger.info('Arrancamos rutas');
    this.app = app;
    logger.info('app inicidada');
    this.fotoslist = new listfiles().getFilesInFolder("/home/nestor/Imágenes", 0);
    this.getLan();

  }


  getLan() {
    this.app.get("/lan", async (req, res) => {
      try {
        const regex = /^MAC Address: /gm;
        const subst = '';
        const sentence = 'nmap --privileged -sn 192.168.0.0/24';
        let result = await new Mapperlan().execute(sentence).then(
          (data) => {
            let jsonData =  JSON.parse(fs.readFileSync('../database/nmap_results.json', 'utf-8'));
            let lines = data.split('\n');
            let res =[];
            lines.shift();
            lines.shift();
            lines.pop();
            lines.pop();
            lines.forEach((currentValue, index, arr) => {
              if (currentValue.match('^MAC Address:')) {
                let mac = currentValue.replace(regex, subst).substring(0, 17)
                console.log('Mac: ' + mac)
                console.log('Objeto: ' + jsonData.data.hosts[mac])
                jsonData.data.hosts[mac].host = "Corriendo";
                if(jsonData.data.hosts[mac]==undefined){
                  new Error('Mac ' + mac + ' no esta controlada, incorporarla en fichero json.')
                }
                console.log('Objeto Mod: ' + jsonData.data.hosts[mac])
              }
            })
            return JSON.stringify(jsonData);
          }
        );
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json(
          {
            data: result
          });

      } catch (err) {
        res.status(400).json({
          message: "Some error occured",
          err
        });
      }
    })
  }




}
export default Routes;