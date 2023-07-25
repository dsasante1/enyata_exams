
const fizzBuzz = require('./question5.js');

test('sort unordered array in ascending order', () => {
  expect(sortAscendingOrder().toStrictEqual([1, 2, 3, 4, 5]);
});

test('sort unordered array in descending order', () => {
  expect(sortDescendingOrder().toStrictEqual([5, 4, 3, 2, 1]);
});

