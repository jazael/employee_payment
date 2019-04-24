// const add = require('../src/index');
const readFile = require('../src/readfile');

test('readFile is a function', () => {
    expect(typeof readFile).toEqual('function');
});
  