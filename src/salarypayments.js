const readFile = require('../src/readfile');
const constants = require('../src/constants');

const calculatorSchedulsWorking = (value) => {
    const informationFile = readFile('./data.txt');
    console.log(informationFile.length)
    
    /*console.log(informationFile);
    constants.WORK_SCHEDULE.EVENING_AND_NIGHT = 'ssss';
    console.log(constants.WORK_SCHEDULE.EVENING_AND_NIGHT);*/
    //return informationFile;
    return 'hola';
}

const  calculationOfHoursWorked = (value) => {

}

module.exports = {
    calculatorSchedulsWorking
};