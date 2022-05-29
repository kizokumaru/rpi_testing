import fs         from 'node:fs';
import path from 'node:path';
import File from './file.js';

const localhost_port = 'http://localhost:3001/';
const pathorigin = '/home/nestor/Imágenes/';
const extensions = ['.jpg', '.png']

class ListFiles {
    constructor(){
        this.pathFile ="";
        this.seqControl=0;
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
      
          if (stats.isFile() && extensions.includes(path.extname(fileName))) { 
            let file = new File(fileName, filePath.replace(pathorigin,localhost_port), stats.dev, stats.ino, this.seqControl++);
            list.push(file); 
          }
        })
        return list;
      }
 }

 export default ListFiles;