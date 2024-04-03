const fs = require("fs"); 
const {v4: uuidv4} = require("uuid");
const validateUUID = require("../utils/validateUUID"); // Validate a UUID to prevent unneeded 
const validateObj = require("../utils/validateObj"); // Validate a specific input object based on the headers of the csv file
const zipObj = require("../utils/zipObject");
class GenericFileModel {
    static queryFile = ""; // File where data manipulation will happen
    constructor(data) {
        this.data = data // Data Object that are going to be saved
        this.id = uuidv4(); // Unique Identifier for possible call of save method
        this.saveData = ``; // Data that will be saved by the save method.
    }
    
    save() {
        return new Promise((resolve,reject) => {
            fs.appendFile(this.constructor.queryFile,this.saveData,(err) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(this.saveData)
                }
            });

        })
    }

    static fetchAll() {
        return new Promise((resolve,reject) => {
            fs.readFile(this.queryFile,(err,data) => {
                if(err) {
                    reject(err);
                }
                const result = data.toString().split("\n").map(item => item.split(","));
                const headers = result.shift();
                result.pop();
                const objArr = result.map(line => {
                    const obj = {

                    }
                    for(let h of headers) {
                        obj[h] = line[headers.indexOf(h)];
                    }

                    return obj;
                })

                resolve(objArr);
            })
        })
    }

    static fetchById(id) {
        validateUUID(id);
        return new Promise((resolve,reject) => {
            fs.readFile(this.queryFile,(err,data) => {
                if(err) {
                    reject(err);
                }
                const dataArr = data.toString().split("\n").map(line => line.split(","))
                const headers = dataArr.shift();

                const [line] = dataArr.filter((item) => {
                    if(item[0] == id) {
                        return true;
                    }
                    return false;
                })

                const obj = {};
                for(let h of headers) {
                    obj[h] = line[headers.indexOf(h)];
                }

                resolve(obj);
                
            })
        })
    }

    static editById(id, dataObj) {
        validateUUID(id);
        return new Promise((resolve,reject) => {
            let toReWrite = "";
            fs.readFile(this.queryFile,(err,data) => {
                if(err) {
                    reject(err);
                }

                const dataArr = data.toString().split("\n").map(line => line.split(","));
                validateObj(dataArr[0],dataObj);
                let finalObj;
                for(let tuple of dataArr) {
                    if(tuple[0] == id) {
                        const oldObj = zipObj(dataArr[0],tuple);
                        finalObj = Object.assign(oldObj,dataObj);
                        const objArr = Object.values(finalObj).join(",");
                        toReWrite+= `${objArr}\n`
                    } else if(tuple[0] !== "") {
                        toReWrite+=`${tuple.join(",")}\n`;
                    }
                }

                fs.writeFile(this.queryFile,toReWrite,() => {
                    if(err) {
                        reject(err);
                    }
                    else {
                        resolve(finalObj);
                    }
                });

            })           
        })
    }

    static deleteById(id) {
        validateUUID(id);
        return new Promise((resolve,reject) => {
            let toReWrite = "";
            fs.readFile(this.queryFile,(err,data) => {
                if(err) {
                    reject(err);
                }

                const dataArr = data.toString().split("\n").map(item => item.split(","))
                for(let tuple of dataArr) {
                    if(tuple[0] !== id && tuple[0]) {
                        toReWrite+= `${tuple.join(",")}\n`;
                    }
                }

                fs.writeFile(this.queryFile,toReWrite, (err) => {
                    if(err) {
                        reject(err);
                    } else {
                        resolve(id);
                    }
                })
            })
        })
    }
}

module.exports = GenericFileModel