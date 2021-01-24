/*
    Write a function that accepts a base and an exponent.
    It should return the power of the base to the exponent.
    power(2, 0) //returns 1
    power(2, 2) //returns 3
    power(2, 4) //returns 16 
*/

function power(base, exponent)  {
    return Math.pow(base, exponent)
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

function factorial(input)    {
    return input === 1 ? 1  : input * factorial(input - 1)
}

console.log(factorial(7))