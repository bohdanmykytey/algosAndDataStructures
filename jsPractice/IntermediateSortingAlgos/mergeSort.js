/*
    Merge Sort

    - it's a combination of two things - merging and sorting 
    - exploits the fact that arrays of 0 or 1 elements are always sorted
    - works by decomposing an array into smaller arrays of 0 or 1 elements,
      then building up a newly sorted array.
*/

//building the merging function to merge two sorted arrays.

/*
    - in order to implement merge sort, it's useful to first implement a 
      helper function responsible for merging two sorted arrays
    - given two arrays which are sorted, this helper function should create 
      a new array which is also sorted, and consists of all the elements 
      in the two input arrays
    - this function should run in O(n + m) time and O(n + m) space and should
      NOT modify the parameters passed to it.
*/

/*
    - create an empty array, take a look at the smallest values in each input array
    - while there are still values we haven't looked at... i & j start at 0 and < arr.length
        - if the value in the first array is smaller than the value in the second arr, push the 
          value in the first array into our results and move on the the next value in the first array 
        - if the value in the first array is larger than the value in the second arr, push the value
          in the second array into our results and move on to the next value in the second array
        - once we exhaust one array, push in all remaining values from the other arr 

    BOTH INPUT ARRAYS MUST BE SORTED IN THE SAME ORDER 
*/

//implementation

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
