//primitive data types take up a constant amount of RAM
//strings take up O(n) space

//EXAMPLES

function sum(arr)   {
    let total = 0;
    for (let i = 0; i < arr.length; i++)    {
        total += arr[i];
    }
    return total;
}
//evaluated in O(1) space, because there are only two variables taking up
//space: total and i.

function double(arr)    {
    let newArr = [];
    for (let i = 0; i < arr.length; i++)    {
        newArr.push(2 * arr[i]) //this arr is getting longer directly in proportion to the input
    }
    return newArr;
}
//this is evaluated at O(n)

