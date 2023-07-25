// Given an unsorted array of numbers, write two functions. One should sort the array in
// ascending order and the other should sort the array in descending order.

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};

function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}


function bubbleSort(arr, compare = defaultCompare) {
    const { length } = arr;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) { // refer to note below
            if (compare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}





arrayItem = [1, 4, 3, 2,5]


function sortAscendingOrder(arrayItem){

    // let arrayItemLength = arrayItem.length()
    //
    // for(let item in arrayItem){
    //     if (item < arrayItem[arrayItemLength]){

}

function sortDescendingOrder(arrayItem){


}


module.exports = sortAscendingOrder;
module.exports = sortDescendingOrder;
