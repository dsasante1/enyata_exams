// Given an unsorted array of numbers, write two functions. One should sort the array in
// ascending order and the other should sort the array in descending order.

function checkNumbers (arrays) {
    let result = []

    for(let arrayItem of arrays){
        if (typeof arrayItem === 'number' && !Number.isNaN(arrayItem)) {
            result.push(arrayItem);
        }
}
  return result;
}


let arrayItem = [1, 4, 3, 2,5]


function sortAscendingOrder(arrayItem){
    if (Array.isArray(arrayItem)) {
        let newArray = checkNumbers(arrayItem)
        return newArray.sort()
    }else{
        return 'invalid input. enter an array of numbers'
    }
}

function sortDescendingOrder(arrayItem){
     if (Array.isArray(arrayItem)) {
        let newArray = checkNumbers(arrayItem)
        return newArray.sort().reverse()
    }else{
        return 'invalid input. enter an array of numbers'
    }

}


console.log(sortAscendingOrder(arrayItem))
console.log(sortDescendingOrder(arrayItem))

module.exports = sortAscendingOrder;
module.exports = sortDescendingOrder;
