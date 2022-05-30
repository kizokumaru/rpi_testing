import nmap from 'node-nmap';
import fs from 'node:fs';
nmap.nmapLocation = 'nmap'; //default

class Scanlan{
    constructor(){
        this.jsonData=JSON.parse(fs.readFileSync('../../../database/nmap_results.json', 'utf-8'));
    }

    scan(){
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
    }
}
export default Scanlan;