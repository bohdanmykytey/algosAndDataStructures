/*
    Write a function that accepts a base and an exponent.
    It should return the power of the base to the exponent.
    power(2, 0) //returns 1
    power(2, 2) //returns 3
    power(2, 4) //returns 16 
*/

function power(base, exponent) {
  return Math.pow(base, exponent);
}

// console.log(power(2, 4))

/*
    Write a function that accepts a number and
    returns the factorial of tha num

    factorial(1) // 1
    factorial(2) // 2
    factorial(4) // 24
    factorial(7) // 5040
*/

function factorial(input) {
  return input === 1 ? 1 : input * factorial(input - 1);
}

// console.log(factorial(7));

/*
    Write a function called productOfArray which takes in 
    an array of nums and returns the producs of them all

    productOfArray([1,2,3]) // 6
    productOfArray([1,2,3,10]) // 60
*/

function productOfArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

// console.log(productOfArray([1,2,3,10]))

/*
    Write a function called recursiveRange which accepts
    a number and adds up to all the numbers from 0 to the 
    num passed into the function

    recursiveRange(6) // 21
    recursiveRange(10) // 55 
*/

function recursiveRange(input) {
  return input === 0 ? 0 : input + recursiveRange(input - 1)
}

// console.log(recursiveRange(10))

/*
    Write a function called fib that accepts a num and returns
    the Nth num in the Fibonacci sequence. 

    fib(4) // 3
    fib(10) // 55 
    fib(28) // 317811
    fib(35) // 9227465
*/

function fib(n) {
  return n <= 2 ? 1 : (fib(n - 1) + fib(n - 2))
}

console.log(fib(10))