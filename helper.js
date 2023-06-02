// Here we will write out our file system reading and writing functionality
//readFileSync and writeFileSync
const fs = require("node:fs")

// console.log(fs)
// console.log(Object.keys(fs))

// readFileSync("pathToTheFile","howToReadTheFile")
const path = "./data"
const fileName = "products.json"
const collection = fs.readFileSync(`${path}/${fileName}`,"utf-8")

const resultOfTernary = collection ? JSON.parse(collection) : []
// console.log(resultOfTernary)

function readJSONFile(path, fileName){

    const collection = fs.readFileSync(`${path}/${fileName}`,"utf-8");

    return collection ? JSON.parse(collection) : [];
}
// writefileSync("path", "data", {encoding: "utf-8"})

function writeJSONFile(path, fileName, data){

    data = JSON.stringify(data)

    fs.writeFileSync(`${path}/${fileName}`,data , {encoding: "utf-8"})
}

module.exports = {
    writeJSONFile,
    readJSONFile,
}