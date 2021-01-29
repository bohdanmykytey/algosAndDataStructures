/*
    Linear Search:

    Given an array the simplest way to search for a for a value by looking at
    every element in the array and check if it's the value we want. 

    JS has methods built in to do this:
    - indexOf()
    - find()
    - includes()
    - findIndex()

    But how do these functions work?
    These methods literally go through every element and checks to see if it's there.
*/

/*
    Challenge:
    Write a function 
     - that accepts an array and a value
     - loops through the arr and checks if the current arr element is equal to the value
     - if it is, return the index
     - if not return -1;

*/

//initial solution
function linearSearch(arr, value) {
    return arr.includes(value) ? "Found" : "Not found"
}

console.log(linearSearch([10, 15, 20, 25, 30], 13)); //false
console.log(linearSearch([10, 15, 20, 25, 30], 20)); //true
console.log(linearSearch(["mike", "tom", "bob", "james"], "james")); //true


