/*  
    FIND LARGEST NUM IN AN UNSORTED ARRAY
*/

//naiive approach O(N) linear time
function max(arr) {
    let max = 0;

    for (let i = 0; i <= arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log(max([4, 2, 7, 9, 10, 16, 2, 12]))

//REFACTORED
function findLargestNum(arr) {
    return Math.max(...arr)
}

console.log(findLargestNum([4, 2, 7, 9, 10, 16, 2, 12]));
//still O(N) time complexity, but cleaner code.