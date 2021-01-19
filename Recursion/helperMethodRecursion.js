/*
    Helper Method Recursion (uses an external data structure, in this case an array)
    Design Pattern

    function outer(input) {
        let outerScopedVar = [];

        function helper(helperInput) {
            //modify the outer scoped variable
            helper(helperInput--);
        }
        
        helper(input)

        return outerScopedVariable;
    }
*/

function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;
}

// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))


//Same problem solved with PURE RECURSION (no external data structure, 
//everything is encapsulated into the function)

function collectOddValuesRecursively(arr) {
    let newArr = [];

    if (arr.length === 0) return newArr;

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }

    //concat onto newArr is what allows us to return
    //the correct values, otherwise with each iteration 
    //the newArr would epmpty. It copies the array as it
    //meets the conditionals otherwise returns empty
    newArr = newArr.concat(collectOddValuesRecursively(arr.slice(1)))
    return newArr;
}

console.log(collectOddValuesRecursively([1, 2, 3, 4, 5, 6, 7, 8, 9]))