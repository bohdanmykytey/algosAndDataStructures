/*
    Implement a function called countUniqueValues which accepts a sorted arrray and 
    counts the unique values in the array. There can be negative numbers in the array
*/

function countUniqueValues(array) {
    if (array.length === 0) return 0;

    let i = 0;

    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j]
        }
    }
    return i + 1;

}
console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]))//7
console.log(countUniqueValues([1, 1, 3, 3,]))//2
console.log(countUniqueValues([]))//0

//algo works but if array is empty it returns 1 instead of zero,
//adding if statement on line 7 to deal with this

//linear time complexity O(N)
