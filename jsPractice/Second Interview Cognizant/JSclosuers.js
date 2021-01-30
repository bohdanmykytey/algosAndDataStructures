// JavaScript Closures
// in other programming languages this would not run because the vars are functionally scoped,
// but in js myName is globally scoped
// in JS everything in the child scope has access to the parents or its parents parents scope.

const myName = "Bohdan";

function printName() {
  console.log(myName);
}

// printName()

function outerFunction(outerVar) {
  return function innerFunction(innerVar) {
      console.log('Outer variable:' + outerVar);
      console.log('Inner variable:' + innerVar);
  };
}

const newFunction = outerFunction('outside');
// newFunction('inner')


function addTo(input)    {

  let add = function(inner)   {
      return input + inner
  }

  return add;
}

let addSix = new addTo(6)
console.log(addSix(21))