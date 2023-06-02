// console.log("happy man")

// run : function to run our entire command line app
const {createRandomProduct} = require("./products.js")
const {writeJSONFile, readJSONFile} = require("./helper.js");
const { read } = require("fs");
function run(){
console.log("Welcome to our Products App\n\n\n\n")
// console.log("We're the Best at What We Do!")
// console.log(createRandomProduct())

let productsData = readJSONFile("./data" , "products.json")
// if file is empty  -> give us an empty array
productsData.push(createRandomProduct());

writeJSONFile("./data", "products.json", productsData)
}
run();

/// process object + process.argvn
/// in package.json scripts.start = "start": "node index.js"
