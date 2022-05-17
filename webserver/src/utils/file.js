class File {
    constructor(name, path,dev, ino) {
        this.id = dev.toString().concat(ino.toString());
        this.name = name;
        this.path = path;
        this.dev =dev; 
        this.ino = ino;
    }
    getId() { return this.id; }
    getName() { return this.name; }
    setName(name) { this.name = name; }
    getPath() { return this.path; }
    setPath(path) { this.path = path; }
    getDev() { return this.dev; }
    setDev(dev) { this.dev = dev; }
    getIno() { return this.ino; }
    setIno(ino) { this.ino = ino; }
}

module.exports = File;