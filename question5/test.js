const { describe } = require('mocha');
const { sortAscendingOrder, sortDescendingOrder } = require('./question5.js');
// const sortDescendingOrder = require('./question5.js');
const assert = require("assert");

// test('sort unordered array in ascending order', () => {
//   expect(sortAscendingOrder([3, 4, 2, 5, 1])).toStrictEqual([ 1, 2, 3, 4, 5 ]);

// });

describe("test the ascending order function", function (){
  it("sort an unordered array to ascending order", function (){
    assert.deepStrictEqual(sortAscendingOrder([3, 4, 2, 5, 1]), [1, 2, 3, 4, 5]);
  }),

    it("sort an unordered array to descending order", function (){
    assert.deepStrictEqual(sortDescendingOrder([3, 4, 2, 5, 1]), [5, 4, 3, 2, 1]);
  })



})

