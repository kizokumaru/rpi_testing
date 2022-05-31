import shell from 'shelljs';
/*const sentence = 'nmap --privileged -sn 192.168.0.0/24';*/

export default class Mapperlan {

    constructor() {}

    execute(sentence) {
        return new Promise((resolve, reject) => {
            let resultExec = shell.exec(sentence, { silent: true},(code,stdout, stderr)=>{
                if(code==0){resolve(stdout)}
                else{reject(stderr)}
            });

        });
    }
    getSentence() { return this.sentence; }
    getStdout() { return this.stdout; }
    getStderr() { return this.stderr; }
    getCode() { return this.code; }
    setSentence(sentence) { this.sentence = sentence; }
    setStdout(stdout) { this.stdout = stdout; }
    setStderr(stderr) { this.stderr = stderr; }
    setCode(code) { this.code = code; }
}

