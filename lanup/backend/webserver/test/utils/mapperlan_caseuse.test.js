import Mapperlan from "../../src/utils/mapperlan.mjs";
const sentence = 'nmap --privileged -sn 192.168.0.0/24';
let dm = new Date();
console.log('Inicio a ' + dm.getHours() + ":" + dm.getMinutes() + ":" + dm.getSeconds());

async function getLanData() {
    
    let result = new Mapperlan().execute(sentence).then(
        (data)=>{
            return data;
        }
    );
    
}

let datalan = await getLanData();
console.log(datalan);