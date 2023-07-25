
const fizzBuzz = require('./question1.js');


test('fizz buzz input 3', () => {
    expect(fizzBuzz(3)).toStrictEqual(["1","2","Fizz"]);
   
  });


  test('fizz buzz input 5', () => {
  expect(fizzBuzz(5)).toStrictEqual(["1","2","Fizz","4","Buzz"]);
});



test('fizz buzz input 15', () => {
  expect(fizzBuzz(15)).toStrictEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz",
  "13","14","FizzBuzz"]);

});