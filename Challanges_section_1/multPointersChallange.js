/*
    Implement a func wich accepts a variable num of args and 
    checks if thre are any duplicates in the args passed in.

    Solving using multiple pointers.
    Solution must be in O log(N)

    areThereDuplicates(1,2,3) //falase
    areThereDuplicates(1,2,1) //true
    areThereDuplicates('a','b','c','a') //true
*/

function areThereDuplicates(...args)   {
    let sorted = args.sort((a,b) => a - b);
    // console.log(sorted) //sorting algo works

    let start = 0;
    let next = 1;

    while(next < sorted.length) {
        if(sorted[start] === sorted[next])  {
            return true;
        }
        start++;
        next++
    } 
    return true;
}

console.log(areThereDuplicates(1,2,3))