const assert = require('assert');

const fizzBuzz = require('./question1.js');



assert.strictEqual(fizzBuzz(3), ["1","2","Fizz"]);

assert.strictEqual(fizzBuzz(5), ["1","2","Fizz","4","Buzz"]);

assert.strictEqual(fizzBuzz(15), ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz",
"13","14","FizzBuzz"]);


