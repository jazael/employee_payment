const readFile = require('../src/readfile');
const constants = require('../src/constants');
const utils = require('../src/util')

const calculatorSchedulsWorking = (file) => {
    const informationFile = readFile(file);

    return informationFile.map(value => `The amount to pay  ${value.employee} is: ${calculationOfHoursWorked(value.schedules)} USD.`);
}

const calculationOfHoursWorked = (arr) => {
    const abbreviation = ['MO', 'TU', 'WE', 'TH', 'FR'];
    return arr
        .map(value => {
            const schedule_abbreviation = value.slice(0, 2);
            const schedule = value.slice(2);
            const arrSchedule = schedule.split('-');
            let employeesalary = 0;
            
            const workingHours = utils.calculateDifferenceBetweenHours(arrSchedule[0], arrSchedule[1]);
            const pricePerHoursWorked = rulesToCalculateTheSalary(schedule);

            if(abbreviation.indexOf(schedule_abbreviation) !== -1) {
                employeesalary = pricePerHoursWorked * workingHours;
            } else {
                employeesalary = ((pricePerHoursWorked + constants.EXTRA_BONUS_WEEKEND) * workingHours);
            }

            return employeesalary;
        })
        .reduce((previous, current) => {
            return previous + current;
        });
}

const rulesToCalculateTheSalary = (timechain) => {
    const arrTimes = timechain.split('-');
    let salaryvalueperhour = 0;

    const ruleOneOfWorkSchedule = constants.WORK_SCHEDULE.NIGHT_AND_MORNING.split('-');
    const ruleTwoOfWorkSchedule = constants.WORK_SCHEDULE.MORNING_AND_EVENING.split('-');
    const ruleThreeOfWorkSchedule = constants.WORK_SCHEDULE.EVENING_AND_NIGHT.split('-');

    const ruleOneTime = utils.coversionTimeChainToTimeNumber(ruleOneOfWorkSchedule[0], ruleOneOfWorkSchedule[1]);
    const ruleTwoTime = utils.coversionTimeChainToTimeNumber(ruleTwoOfWorkSchedule[0], ruleTwoOfWorkSchedule[1]);
    const ruleThreeTime = utils.coversionTimeChainToTimeNumber(ruleThreeOfWorkSchedule[0], ruleThreeOfWorkSchedule[1]);

    const startAndEndOfWorkTime = utils.coversionTimeChainToTimeNumber(arrTimes[0], arrTimes[1]);

    if( startAndEndOfWorkTime.startofworktime >= ruleOneTime.startofworktime && 
        startAndEndOfWorkTime.endofworktime <= ruleOneTime.endofworktime) 
        {
            salaryvalueperhour = constants.HOUR_PAYMENT.NIGHT_AND_MORNING;
        } 
    else if( startAndEndOfWorkTime.startofworktime >= ruleTwoTime.startofworktime && 
        startAndEndOfWorkTime.endofworktime <= ruleTwoTime.endofworktime) 
        {
            salaryvalueperhour = constants.HOUR_PAYMENT.MORNING_AND_EVENING;
        } 
    else if(startAndEndOfWorkTime.startofworktime >= ruleThreeTime.startofworktime && 
        startAndEndOfWorkTime.endofworktime <= ruleThreeTime.endofworktime) 
        {
            salaryvalueperhour = constants.HOUR_PAYMENT.EVENING_AND_NIGHT;
        }
    else {
        console.log('entro')
    }

    return salaryvalueperhour;
}

module.exports = {
    calculatorSchedulsWorking
};