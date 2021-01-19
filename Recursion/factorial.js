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
//undesrtand the base case and recursive call - witout them you will hit a stack overflow

function factorialRecursive(num) {
    return num === 1 ? 1 : num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(5));
//returns 5 * 4 * 3 * 2 * 1 = 120