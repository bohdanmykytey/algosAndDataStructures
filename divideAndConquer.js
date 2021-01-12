/*
    DIVIDE AND CONQUER

    This pattern involves dividing a data set into smaller chunks and then repeating
    a process of a subset of data.

    This pattern can greatly decrease the time complexity
*/

/*
    Given an array if ints, sort it then write a function called search,
    that accepts a value and returns the index where the value is passed 
    into the func is located, if the value is not found return 'value not found' 
*/

//Naiive approach
function search(arr, val) {

    let sortedArr = arr.sort((a, b) => a - b)

    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] === val) {
            return i;
        }
    }
    return 'value not found'
}
//O(N) linear search


//BINARY SEARCH
//dividing the array into smaller and smalled chunks based on if else condition
//cutting down the steps and runtime almost exponentially 

function searchRefactored(arr) {

    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (currentElement < val) {
            min = middle + 1;
        } else if (currentElement > val) {
            max = middle - 1;
        } else {
            return middle;
        }
        return -1;
    }
}
//time complexity is log(N) of this binary search
