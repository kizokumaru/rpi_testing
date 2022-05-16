const fs = require('fs');
const folderName = '/home/nestor/Imágenes/';
const logger = require('./logger')
const path = require('path');
const File = require('./file.mjs');


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
            let file = new File(fileName, filePath, stats.dev, stats.ino);
            list.push(file); 
          }
        })
        return list;
      }
 }

 module.exports = ListFiles;
 