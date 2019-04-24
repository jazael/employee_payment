const fs = require('fs');

const readFile = (file) => {
    let employeeschedules = [];
    try {
        const stream = fs.readFileSync(file, 'utf8').toString().split('\n');
        stream.forEach(elem => {
            console.log('hola')
            const information = elem.split('=');
            employeeschedules[information[0]] = { values: information[1].split(',') };
        });
    } catch (err) {
        console.error(err)
    }

    return employeeschedules;
}

module.exports = readFile;