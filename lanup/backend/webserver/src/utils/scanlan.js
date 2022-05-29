import nmap from 'node-nmap';
nmap.nmapLocation = 'nmap'; //default
import fs from 'node:fs';
const jsonData = JSON.parse(fs.readFileSync('../../../database/nmap_results.json', 'utf-8'))

let quickscan = new nmap.QuickScan('--privileged -sn 192.168.0.0/24');

quickscan.on('complete', function (data) {
    console.log(data[0]);
    /*data.map(item=>{
        console.log(jsonData[item.mac].alias);
    })*/
    
});

quickscan.on('error', function (error) {
    console.log(error);
});

quickscan.startScan();

/*class Scanlan{
}*/