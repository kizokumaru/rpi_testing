import logger from './utils/logger.js';
import listfiles from './utils/listfiles.mjs';
import fs from 'node:fs';
import Mapperlan from "../src/utils/mapperlan.mjs";
import pathserver from './utils/config.js';


class Routes {
  constructor(app) {
    this.sentence = 'nmap --privileged -sn 192.168.0.0/24';
    logger.info('Arrancamos rutas');
    this.app = app;
    logger.info('app inicidada');
    this.fotoslist = new listfiles().getFilesInFolder("/home/nestor/Imágenes", 0);
    this.getLan();

  }


  getLan() {
    this.app.get("/lan", async (req, res) => {
      this.getData().then((data1) => {
        //try {
          console.log('path: ' + pathserver + '/database/nmap_results.json');
          console.log(data1);
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.status(200).json(
            {
              data: data1
            });

        /*} catch (err) {
          res.status(400).json({
            message: "Some error occured",
            err
          });
        }*/
      });
    })
  }

  async getData() {
    const regex = /^MAC Address: /gm;
    const subst = '';
    const regexIp = /^Nmap scan report for /gm;
    return await new Mapperlan().execute(this.sentence).then(
      (data) => {
        let jsonData = JSON.parse(fs.readFileSync(pathserver + '/database/nmap_results.json', 'utf-8'));
        let lines = data.split('\n');
        let res = [];
        lines.shift();
        lines.shift();
        lines.pop();
        lines.pop();
        lines.forEach((currentValue, index, arr) => {
          if (currentValue.match('^MAC Address:')) {
            let mac = currentValue.replace(regex, subst).substring(0, 17);
            let ip = arr[index + 1].replace(regexIp, subst);
            if (jsonData.data.hosts[mac] == undefined) {
              new Error('Mac ' + mac + ' no esta controlada, incorporarla en fichero json.')
            } else {
              jsonData.data.hosts[mac].state = "Live";
              jsonData.data.hosts[mac].ip = ip;
             }
          }

        })
        return jsonData;
      }
    );
    
  }
}



export default Routes;