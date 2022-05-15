const fs = require('fs');
const folderName = '/home/nestor/Imágenes/';


function listOfFiles(){
    Console.log("Hola")
    try {
        if (!fs.existsSync(folderName)) {
          fs.mkdirSync(folderName);
        }
      } catch (err) {
        console.error(err);
      }

}

export default listOfFiles;
