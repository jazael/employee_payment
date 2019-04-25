const readFile = require('../src/readfile');
const salarypayments = require('../src/salarypayments');

describe('ReadFile utilities module', () => {
    test('readFile is a function', () => {
        expect(typeof readFile).toEqual('function');
    })
});

describe('Salarypayments utilities module', () => {

    test('calculatorSchedulsWorking is a function', () => {
        expect(typeof salarypayments.calculatorSchedulsWorking).toEqual('function');
    })

    test('calculationOfHoursWorked is a function', () => {
        expect(typeof salarypayments.calculationOfHoursWorked).toEqual('function');
    })

    test('returns salary of the calculationOfHoursWorked', () => {
        const scheduleMocks = [ 
            'MO10:00-12:00',
            'TU10:00-12:00',
            'TH01:00-03:00',
            'SA14:00-18:00',
            'SU20:00-21:00'
        ];

        const calculationOfHoursWorked = 215;
        expect(calculationOfHoursWorked).toBe(salarypayments.calculationOfHoursWorked(scheduleMocks));
    })

    test('returns salary of the calculationOfHoursWorked', () => {
        const scheduleMocks = [ 
            'MO10:00-12:00',
            'TU10:00-11:00',
            'TH01:00-02:00',
            'SA14:00-17:00',
            'SU20:00-22:00'
        ];

        const calculationOfHoursWorked = 255;
        expect(calculationOfHoursWorked).not.toBe(salarypayments.calculationOfHoursWorked(scheduleMocks));
    })

    test('rulesToCalculateTheSalary is a function', () => {
        expect(typeof salarypayments.rulesToCalculateTheSalary).toEqual('function');
    })

    test('returns hours and minutes of the rulesToCalculateTheSalary', () => {
        const scheduleMocks = '10:00-12:00';

        const valuePerHours = 15;
        expect(valuePerHours).toBe(salarypayments.rulesToCalculateTheSalary(scheduleMocks));
    })

    test('returns hours and minutes of the rulesToCalculateTheSalary', () => {
        const scheduleMocks = '19:00-20:00';

        const valuePerHours = 20;
        expect(valuePerHours).toBe(salarypayments.rulesToCalculateTheSalary(scheduleMocks));
    })

});
