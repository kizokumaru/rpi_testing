import shell from 'shelljs';
const sentence = 'nmap --privileged -sn 192.168.0.0/24';

export default class Mapperlan{
    constructor(){
        this.sentence = 'nmap --privileged -sn 192.168.0.0/24';
        this.stdout=""
        this.stderr=""
        this.code=""
        this.execute();
    }
    
    execute(){
        shell.exec(sentence, {silent:true}, function(code, stdout, stderr) {
            this.code=code;
            this.stdout=stdout;
            this.stderr=stderr;
          });
    }
    getResult(){
        return {"code":this.code,"stdout":this.stdout,"stderr":this.stderr}
    }
}
