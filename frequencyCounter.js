//write a function called same, which takes in 2 arrays.
//the func should return if every value squared in the array has a corresponding value in the second array/
//The frequenxy of all values must be the same but the arrays don't have to be in the same order.
//(frequency being how many times the number and the squared result are present

/*
examples:
same([1,2,3], [4,1,9]) returns true
same([1,2,3], [1,9]) returns false
same([1,2,1], [4,4,9]) returns false (must be the same frequency)
*/

/*
1) restate the problem in your own words:
    - two arrays are passed into a function, if one != the squared of the first nums in the array return false
    - if the two arrays are different lengths return false
    - if the the product is repeated more than once return false
2) what are the inputs 
    - 2 arrays, one nums and the other is the squered products of nums; 
      or atleast it should be to return true
3) what outputs should be coming out of the function?
    - true or false
4) can the outputs be determined from the inputs?
    - yes, only if the first array === the second array squared

*/

//naive solution
function same(arr1, arr2) {
    //immiditely we know that if the arrs are diff lengths the output must be false
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        console.log(arr2) //so we can see arr2 getting smaller as it keeps looping while true
        arr2.splice(correctIndex, 1)
    }
    return true;
}

// console.log(same([1, 2, 3, 2], [9, 1, 4, 4]))

//O(n^2) becasue of the nested loop, though it works it's far from optimal performance
//avoid nested loops when possible.

//refactoring in O(n)

function sameRefactored(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if ((frequencyCounter2[key ** 2] !== frequencyCounter1[key])) {
            return false
        }
    }
    return true;
}

// console.log(sameRefactored([1, 2, 3, 2], [9, 1, 4, 4]))


//using frequencies to compare to strings
//given 2 strings write a func that determines if the 2nd str is an anagram of the 1st

function isAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let lookUp = {};

    for (let i = 0; i < str1.length; i++) {

        let letter = str1[i]

        lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1;
        // console.log(lookUp)//constructing object with rerinary statements

        //once object is constructed iterate over it and compare the two strings
        for (let j = 0; j < str2.length; j++) {
            let letter = str2[j];
            // console.log(letter)

            // if it cant find letter or letter is = 0 it is NOT an anagram
            if(!lookUp[letter]) {
                return false;
            } else {
                lookUp[letter] -= 1;
                // console.log(lookUp)
            }
        }
    }
    return true;
}

console.log(isAnagram('bar', 'bar'))