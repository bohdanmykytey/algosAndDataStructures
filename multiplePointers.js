//write a function called sumZero with accepts a sorted array of ints and finds the first pair
//of ints that sum up to zero (pos and neg ints)
//return an array that includes both values that sum zero or  undefined if a pair !exist


// naivesolution in O(n^2) time, space complexity in O(1)
function sumZero(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = 0; j < inputArray.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}

// console.log(sumZero[-4, -3, -2, -1, 0, 1, 2, 3])

//refactored solution in O(n) time complexity and O(1) space
//seems like a rudimenrary divide and conquer algo
function sumZeroRefactrored(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZeroRefactrored([-4, -3, -2, -1, 0, 1, 2, 3]))
// console.log(sumZeroRefactrored([-4, -3, -2, -1, 0, 5, 6, 7]))//undefined