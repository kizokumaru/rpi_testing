const fs = require('fs');
const folderName = '/home/nestor/Imágenes/';
const logger = require('./logger')
const path = require('path');

class ListFiles {
    constructor(){
        this.pathFile ="";
    }
    
    getFilesInFolder = (folderName,level) => {
        level++;
        
        var list = [];
        fs.readdirSync(folderName).map(fileName => {
          let filePath = path.join(folderName, fileName);
          let stats = fs.statSync(filePath);
          
          
          if (stats.isDirectory()) {
            list = list.concat(this.getFilesInFolder(filePath,level));
          }
      
          if (stats.isFile()) { 
            list.push(fileName); 
          }
        })
        logger.info('Salimos en getFilesInFolder ' + level + ' : ' + list);
        return list;
      }
 }
 module.exports = ListFiles;
 