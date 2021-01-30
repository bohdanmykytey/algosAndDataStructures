/*
    Insertion Sort:

    Builds up the sort by gradually increasing the size of the array 
    that is already sorted.
    [5, 3, 4, 1, 2] => [5]
    [3, 5, 4, 1, 2] => [3, 5]
    [3, 4, 5, 1, 2] => [3, 4, 5]
    [1, 3, 4, 5, 2] => [1, 3, 4, 5]
    [1, 2, 3, 4, 5] => [1, 2, 3, 4, 5]
    
    How to implement?

    - start by picking the second elem in the arr
    - compare the second elem with the first, if necessary then swap
    - Continue to the next element and if it is in the incorrect order,
      iterate through the sorted position(i.e the left side) to the place
      the element is in the correct place
    - repeat until the arr is sorted  
    - return sorted arr
*/

//implementation

function insertionSort(arr) {
    let j; //had to declare j here so its globally available to the function instead of using var
  //starts at index 1 and iterates up
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    //start at arr[n] and iterates down until currentVal is less than arr[j]
    //then insert it into arr[j + 1] index
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr)
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
//O(n^2) time complexity UNLESS the data is nearly sorted already 
