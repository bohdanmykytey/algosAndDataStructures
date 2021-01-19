/*
    SLIDING WINDOW

    This pattern involces creating a window which can either be an array or a number form one position to another.
    Depending on a certain condition, the window either increases of closes( and a new window is created )
    Very useful for keeping track of a subset of data in an array/string etc.

*/

/*
    EXAMPLE

    Write a func called maxSubArraySum() that accepts an arr of ints and a number called n
    The func should calculate the maximum sum of n consecutive elemnts in an array
    maxSubArraySum([1,2,5,2,8,1,5], 2) returns 10 bc 2 + 8 = 10
    maxSubArraySum([1,2,5,2,8,1,5], 4) returns 17 bc 2 + 5 + 2 + 8 = 17
    
    Edge Case
    maxSubArraySum([], 4) returns null

*/

//Naiive approach

function maxSubArraySum(array, number) {
    if (number > array.length) {
        return null;
    } else if (array.length === 0) {
        return null;
    }

    let max = -Infinity;

    for (let i = 0; i < array.length - number + 1; i++) {
        let temp = 0;
        for (let j = 0; j < number; j++) {
            temp += array[i + j];
        }
        if (temp > max) {
            max = temp;
        }
        return max;
    }
}

// console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3))
//O(n^2) time complexity bocasue of the nested loop



//REFACTOR
function maxSubArraySumRefactor(arr, num){
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num || arr.length === 0) return null;

    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    
    tempSum = maxSum;
    
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    
    return maxSum;
  
}

console.log(maxSubArraySumRefactor([2,6,9,2,1,8,5,6,3], 3))
//O(N) time complexity