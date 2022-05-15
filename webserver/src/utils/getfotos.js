const fs = require('fs');
const folderName = '/home/nestor/Imágenes/';
const logger = require('./logger')
const path = require('path');

exports.listOfFiles= ()=>{
    let list = [];
    try {
        /*if (!fs.existsSync(folderName)) {
          fs.mkdirSync(folderName);
        }*/
        fs.readdirSync(folderName).map(fileName => {
            logger.info(fileName + ' que es?');
            list.push(path.join(folderName, fileName));
            logger.info(fs.statSync(path.join(folderName, fileName)));
            
          });
      } catch (err) {
        console.error(err);
      }
      logger.info(list);
      return list;
}


