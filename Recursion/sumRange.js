function sumRange(num) {
    if(num === 1) return 1;//base case that breaks the recursive loop
    return num + sumRange(num - 1)//recursive call
}

console.log(sumRange(4))