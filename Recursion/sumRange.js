// function sumRange(num) {
//     if(num === 1) return 1;//base case that breaks the recursive loop
//     return num + sumRange(num - 1)//recursive call
// }

//refactroed with one line
function sumRange(num)  {
    return num === 1 ? 1 : num + sumRange(num - 1)
}

console.log(sumRange(4))