/*
    Selection Sort:

    Similar to bubble sort, but instead of first placing the large values into sorted 
    positions, it places the small values into sorted positions.

    Building a bubble sort algo:

    - Store the first elem as the smallest value so far
    - Keep comparing the value to the next value until you find a smaller num
    - If a smaller val is found designate that as the new min and continue
      till the end of the array
    - If the min is not the val(index) then you swap the two
    - Repeat process starting with the next item
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j;
      }
      //swap! but only if i !== smallest
      if (i !== smallest) {
        let temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
      }
    }
  }
  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
//time complexity is O(n^2) - not good
//only "better" than bubble sort when memory is an issue,
//since it may iterate just as many times but swaps way less.
//regardless still massively inefficient.