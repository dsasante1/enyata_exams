const sortAscendingOrder = require('./question5.js');
const sortDescendingOrder = require('./question5.js');

test('sort unordered array in ascending order', () => {
  expect(sortAscendingOrder([1, 4, 3, 2, 5])).toStrictEqual([1, 2, 3, 4, 5]);
});


const sortDescendingOrder = require('./question5.js');


test('sort unordered array in descending order', () => {
  expect(sortDescendingOrder([1, 4, 3, 2,5])).toStrictEqual([5, 4, 3, 2, 1]);

});

