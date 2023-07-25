// Given an unsorted array of numbers, write two functions. One should sort the array in
// ascending order and the other should sort the array in descending order.





let arrayItem = [1, 4, 3, 2,5]


function sortAscendingOrder(arrayItem){
    console.log(arrayItem.sort())
    return arrayItem.sort()


}

function sortDescendingOrder(arrayItem){
    console.log(arrayItem.sort().reverse())
    return arrayItem.sort().reverse()
}


sortAscendingOrder(arrayItem)
sortDescendingOrder(arrayItem)


module.exports = sortAscendingOrder;
module.exports = sortDescendingOrder;
