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

function same(arr1, arr2) {
    //immiditely we know that if the arrs are diff lengths the output must be false
    if (arr1.length !== arr2.length) {
        return false
    }
}