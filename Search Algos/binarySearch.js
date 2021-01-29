/*
    Binary Search: Only Works on Sorted Arrays!!!

    - much raster form of search
    - rather than eliminating one elem at a time you can eliminate
      half the data in the array at a time
    - again, only works with sorted arrays

*/

/*
    Coding Challenge:

     - Write a func called binarySearch that accepts an array and a value
     - Sort the array
     - Create a left pointer at the start and a right at the end 
     - while the left pointer is before the right pointer 
        - create pointer in the middle
        - if it's the value you want, return index
        - if the value is too small move the left pointer up
        - if the value is too large move the right pointer down
        - if value never found return "not found"

*/

function binarySearch(arr, val) {
  //make sure the array is sorted
  //implementing simple sorting algo
  let sorted = arr.sort((a, b) => a - b);

  //set start, middle and end pointers.
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  //console.log(start, middle, end);
  //returns 0, 3 and 7 so working well

  while (sorted[middle] !== val && start <= end) {
    if (val < sorted[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  //making sure the start middle and end are updating
  //console.log(start, middle, end);
  return sorted[middle] === val ? val : "not found"
}

console.log(binarySearch([13, 2, 9, 30, 6, 5, 15, 28], 6));

/*
    Time Complexity of Binary Search:

    Average or worst case - O(log n)
    Best Case - O(1) only happens when the first thing 
    we check is what we're looking for
*/


