//only use arrays when you need ordered data when possible

// Time Complexities
// inserstion = Depends...
//  - when inserting something into an array re-indexing needs to happen, 
//    and if the array is massive then it is not trivial task
//    push and pop are better than shift and unshift

// removal = Depends
//  - same rules apply as insertion

// searching = O(n)
// acess = O(1)
// push = 0(1)
// shift O (n)
// unshift = O(n)
// concat = O(n)
// slice = O(n)
// splice = O(n)
// sort = O(N * Log N)
// forEach/map/filter/reduce/etc... = O(n)

let names = ['Michael', 'Melissa', 'Andrea'];
console.log(names[2])

