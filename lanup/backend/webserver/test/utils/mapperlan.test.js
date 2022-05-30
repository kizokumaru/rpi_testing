import shell from 'shelljs';
import fs from 'node:fs';
const sentence = 'nmap --privileged -sn 192.168.0.0/24';
const jsonData = JSON.parse(fs.readFileSync('../../../database/nmap_results.json', 'utf-8'));
const regex = /^MAC Address: /gm;
const subst = '';

let di = new Date();
  console.log( 'Inicio a '+
  di.getHours() + ":" +
  di.getMinutes() + ":" +
  di.getSeconds());
shell.exec(sentence, {silent:true}, function(code, stdout, stderr) {
  let dm = new Date();
  console.log( 'Procesamos a '+
  dm.getHours() + ":" +
  dm.getMinutes() + ":" +
  dm.getSeconds());
  if(code==0){
    console.log('Finaliza correctamente el nmap')
    console.log(stdout);
    console.log(typeof(stdout));
    let lines = stdout.split('\n');
    lines.shift();
    lines.shift();
    lines.pop();
    lines.pop();
    console.log(lines.length);
    lines.forEach((currentValue, index, arr) =>{
      console.log('currentValue: ' + currentValue)
      console.log('index: ' + index)
      if(currentValue.match('^MAC Address:')){
        let mac = currentValue.replace(regex, subst).substring(0,17)
        console.log(jsonData[mac]);
      }
      //console.log('arr: ' + arr)
    })
  }else{
    console.log('code: ' + code);
    console.log('stderr: ' + stderr);
  }
});
