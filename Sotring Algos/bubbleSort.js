/*
    Bubble Sort:

    Looks at pairs of items in a data sets and swaps them accordingly.
    Has to run through the data set many times until its completely sorted.

    How to implement?

    - start looping from i toward the end of the data set 
    - start an inner loop with j from the beginning until i - 1
    - if arr[j] is > than arr[j + 1], swap the values
    - return sorted arr
*/

//naive approach
function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++)  {
            console.log(arr)
            if(arr[j] < arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

bubbleSort([37,45,29,8])//prints out in descending order
//O(n^2) time complexity