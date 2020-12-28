//analyzing implementation and solutions - and optimizing them
//find a number that is the sum of numbers between 1 up to and incliding n

// const addUpto = (n) => {
//     let total = 0;
//     for(let i = 0; i <= n; i++) {
//         total += i;
//     }
//     return total;
// } 

//time complexity of this linear aka is O(n), time goes up as inputs go uP
//WORSE SOLUTION

const addUpto = (n) =>  {
    return n * (n + 1) / 2;  
} 

//time complexity of this is constant aka O(1) time stays constant no matter the size of the input
//BETTER SOLUTION

console.log(addUpto(6))

//with a nested loop the time complexity is O(n^2) aka exponetial time