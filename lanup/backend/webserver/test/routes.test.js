import fs from 'node:fs';
import Mapperlan from '../src/utils/mapperlan.mjs';
//const jsondata = JSON.parse(fs.readFileSync('../database/nmap_results.json', 'utf-8'));
const regex = /^MAC Address: /gm;
const subst = '';
const sentence = 'nmap --privileged -sn 192.168.0.0/24';
async function test(){
    
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
                console.log('MAC: ' + mac)
                console.log('Objecto: ' + jsonData.data.hosts[mac])
                jsonData.data.hosts[mac].host = "Corriendo";
                if(jsonData.data.hosts[mac]==undefined){
                  new Error('Mac ' + mac + ' no esta controlada, incorporarla en fichero json.')
                }
                console.log('Objeto Mod: ' + jsonData.data.hosts[mac]);
              }
          })
          return JSON.stringify(jsonData);
        }
      );

    return result;
}

let value = test().then((data)=> console.log(data));
