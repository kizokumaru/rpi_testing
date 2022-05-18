const fs = require('fs');
const folderName = '/home/nestor/Imágenes/';
const logger = require('./logger')
const path = require('path');

module.exports.listOfFiles = () => {
  let list = [];
  try {
    /*if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }*/
    fs.readdirSync(folderName).map(fileName => {
      logger.info(fileName + ' que es?');
      list.push(path.join(folderName, fileName));
      let stats = fs.statSync(path.join(folderName, fileName));
      logger.info('is a folder ' + stats.isDirectory());
      logger.info('is a file ' + stats.isFile());
      var uniqueFileId = ("dev".concat(stats.dev.toString().concat("ino".concat(stats.ino.toString()))));
      logger.info(uniqueFileId);

    });
  } catch (err) {
    console.error(err);
  }
  logger.info(list);
  return list;
}


