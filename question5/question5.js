// Given an unsorted array of numbers, write two functions. One should sort the array in
// ascending order and the other should sort the array in descending order.


let arrayItem = [1, 4, 3, 2,5]


function sortAscendingOrder(arrayItem){
    if (Array.isArray(arrayItem)) {
        return arrayItem.sort()
    }else{
        return 'invalid input. enter an array of numbers'
    }
}

function sortDescendingOrder(arrayItem){
     if (Array.isArray(arrayItem)) {
        return arrayItem.sort().reverse()
    }else{
        return 'invalid input. enter an array of numbers'
    }

}



module.exports = sortAscendingOrder;
module.exports = sortDescendingOrder;
