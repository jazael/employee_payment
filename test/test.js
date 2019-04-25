const readFile = require('../src/readfile');
const mock = jest.mock('fs');

test('readFile is a function', () => {
    expect(typeof readFile).toEqual('function');
})

test('read the information of the plain text file', () => {
    const MOCK_FILE_INFO = {
        '/path/to/data.txt': `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00`
    };
    expect(MOCK_FILE_INFO.readFile).toEqual(
        [
            {
                "employee": "RENE",
                "schedules": 
                [
                    "MO10:00-12:00",
                    "TU10:00-12:00",
                    "TH01:00-03:00",
                    "SA14:00-18:00",
                    "SU20:00-21:00",
                ]
            }
        ]
    );
});