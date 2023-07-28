// // Given an unsorted array of numbers, write two functions. One should sort the array in
// // ascending order and the other should sort the array in descending order.

function checkNumbers (arrays) {
    let result = []

    for(let arrayItem of arrays){
        if (typeof arrayItem === 'number' && !Number.isNaN(arrayItem)) {
            result.push(arrayItem);
        }
}
  return result;
}

//
let arrayItem1 = [1, 4, 3, 2, 5]
let arrayItem2 = [1, 4, 3, 2, 5]


function sortAscendingOrder(arrayItem1){
    if (Array.isArray(arrayItem1)) {
        let newArray = checkNumbers(arrayItem1)
        return newArray.sort()
    }else{
        return 'invalid input. enter an array of numbers'
    }
}

function sortDescendingOrder(arrayItem2){
     if (Array.isArray(arrayItem2)) {
        let newArray = checkNumbers(arrayItem2)
        return newArray.sort().reverse()
    }else{
        return 'invalid input. enter an array of numbers'
    }

}
//
//
console.log(sortAscendingOrder(arrayItem1))
console.log(sortDescendingOrder(arrayItem2))
//
exports.sortAscendingOrder = sortAscendingOrder;
exports.sortDescendingOrder = sortDescendingOrder;


