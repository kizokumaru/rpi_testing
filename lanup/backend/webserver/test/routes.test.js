import fs from 'node:fs';
import Mapperlan from '../src/utils/mapperlan.mjs';
//const jsondata = JSON.parse(fs.readFileSync('../database/nmap_results.json', 'utf-8'));
const regex = /^MAC Address: /gm;
const regexIp = /^Nmap scan report for /gm;
const subst = '';
const sentence = 'nmap --privileged -sn 192.168.0.0/24';
async function test() {

  let result = await new Mapperlan().execute(sentence).then(
    (data) => {
      let jsonData = JSON.parse(fs.readFileSync('../database/nmap_results.json', 'utf-8'));
      let lines = data.split('\n');
      let res = [];
      lines.shift();
      lines.shift();
      lines.pop();
      lines.pop();
      console.log(lines.length);
      lines.forEach((currentValue, index, arr) => {

        console.log(currentValue);

        if (currentValue.match('^MAC Address:')) {
          let mac = currentValue.replace(regex, subst).substring(0, 17);
          let ip = arr[index + 1].replace(regexIp, subst);
          console.log(ip);
          console.log('MAC: ' + mac + ' index: ' + index)
          console.log('Objeto: ' + JSON.stringify(jsonData.data.hosts[mac]))

          if (jsonData.data.hosts[mac] == undefined) {
            new Error('Mac ' + mac + ' no esta controlada, incorporarla en fichero json.')
          } else {
            jsonData.data.hosts[mac].state = "Live";
            jsonData.data.hosts[mac].ip = ip;
            console.log('Objeto Mod: ' + JSON.stringify(jsonData.data.hosts[mac]));
          }
        }

      })
      return JSON.stringify(jsonData);
    }
  );

  return result;
}

let value = test()
  .then((data) => console.log(data));
