const fs = require('fs');
const pathserver = require('./config.js')
const logger = require('./logger.js')
const path = require('path');
const File = require('./file.js');
const localhost_port = 'http://localhost:3001/';
const pathorigin = '/home/nestor/Imágenes/';

const folderName = pathserver + '/public';


class ListFiles {
    constructor(){
        this.pathFile ="";
    }
    
    getFilesInFolder = (folderName,level) => {
        level++;
        
        var list = [];
        fs.readdirSync(folderName).map(fileName => {
          console.log(folderName.substring(folderName.indexOf('/home/nestor/Imágenes/') + 1));
          
          let filePath = path.join(folderName, fileName);

          let stats = fs.statSync(filePath);
          
          if (stats.isDirectory()) {
            list = list.concat(this.getFilesInFolder(filePath,level));
          }
      
          if (stats.isFile()) { 
            let file = new File(fileName, filePath.replace(pathorigin,localhost_port), stats.dev, stats.ino);
            list.push(file); 
          }
        })
        return list;
      }
 }

 module.exports = ListFiles;