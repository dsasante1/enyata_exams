function checkNumbers(testNumber){

    if (typeof testNumber === 'number' && !Number.isNaN(testNumber)){
        return true
    }
    return false

}





function fizzBuzz (n){

    let result = []

    if (checkNumbers(n)){

        for (let counter = 1; counter <= n; counter += 1){
            if (counter % 3 === 0 && counter % 5 === 0){
                result.push("FizzBuzz");
            }else if (counter % 3 === 0){
                result.push("Fizz")
            }else if(counter % 5 === 0){
                result.push("Buzz")
            }else{
                result.push(counter.toString())
            }
        }

        return result
    }else{
        return 'invalid input! enter a number'
    }
}

module.exports = fizzBuzz;