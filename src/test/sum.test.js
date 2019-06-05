import sum from '../component/sum'
//const sum = require('../component/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});