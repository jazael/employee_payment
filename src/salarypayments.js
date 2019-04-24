const readFile = require('../src/readfile');
const constants = require('../src/constants');
const calculateDifferenceBetweenHours = require('../src/util')

const calculatorSchedulsWorking = (value) => {
    const informationFile = readFile('./data.txt');
    //console.log(informationFile)

    informationFile.map(value => {
        calculationOfHoursWorked(value.schedules);
    });
    
    /*console.log(informationFile);
    constants.WORK_SCHEDULE.EVENING_AND_NIGHT = 'ssss';
    console.log(constants.WORK_SCHEDULE.EVENING_AND_NIGHT);*/
    //return informationFile;
    return 'hola';
}

const calculationOfHoursWorked = (arr) => {
    const abbreviation = ['MO', 'TU', 'WE', 'TH', 'FR']
    arr.map(value => {
        const schedule_abbreviation = value.slice(0, 2);
        const schedule = value.slice(2);
        const algo = schedule.split('-');
        calculateDifferenceBetweenHours(algo[0], algo[1]);
        if(abbreviation.indexOf(schedule_abbreviation) !== -1) {
            return 1;
        } else {
            return 0;
        }
    });
}

const converterStringToTime = (timechain) => {
    const arrTimes = timechain.split('-');

    return 
}

module.exports = {
    calculatorSchedulsWorking
};