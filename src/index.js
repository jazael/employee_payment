const readFile = require('./readfile');

const informationFile = readFile('./data.txt');

console.log(informationFile.length);