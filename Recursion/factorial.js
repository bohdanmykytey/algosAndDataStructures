/*
    Factorial functions. 
    The factorial of 4 is 4 * 3 * 2 * 1

*/

//iterative solution, non recursive
function factorial(num) {
    let total = 1;

    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

// console.log(factorial(4))

//recursive solution
//undesrtand the base case and recursive call

function factorialRecursive(num) {
    if(num === 1) return 1;
    return num * factorialRecursive(num - 1)
}

console.log(factorialRecursive(3))