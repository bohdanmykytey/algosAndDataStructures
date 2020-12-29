// Big O of Objects
// inserstion = O(1)
// removal = O(1)
// searching = O(n) (checking to see if a given piece of info is in a value somewhere)
// acess = O(1)

// Big O of Object Methods
// Object.keys = O(n)
// Obejct.values = O(n)
// Object.entries = O(n)
// hasOwnProperty = 0(1)

const instructor =  {
    firstName: 'Michael',
    lastName: 'Scott',
    facvoriteNumbers: [3, 8, 888]
}

console.log(Object.keys(instructor)) //O(n)
// prints [ 'firstName', 'lastName', 'facvoriteNumbers' ]

console.log(Object.values(instructor))
/*
prints:
[ 'firstName', 'lastName', 'facvoriteNumbers' ]
[ 'Michael', 'Scott', [ 3, 8, 888 ] ]
*/

console.log(Object.entries(instructor)) //O(n)
/*
prints: both keys and values in an array of arrays
[
  [ 'firstName', 'Michael' ],
  [ 'lastName', 'Scott' ],
  [ 'facvoriteNumbers', [ 3, 8, 888 ] ]
]
*/