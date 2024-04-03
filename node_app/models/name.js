const path = require("path");
const abs = path.resolve("../1/data/names.txt");
const GenericFileModel = require("./genericModel");
const pathUtil = require("../utils/path");

class Name extends GenericFileModel{
    static queryFile = path.join(pathUtil,"/data/","names.csv");
    constructor(data) {
        super()
        const {name} = data;
        this.name = name;
        this.saveData = `${this.id},${this.name}\n`;
    }

}

module.exports = Name;