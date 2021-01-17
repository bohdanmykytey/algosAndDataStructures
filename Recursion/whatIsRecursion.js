/*
    What is recursion?
        - just a process that class itself

    Why care?
        - JSON.parse() JSON.stringify() are recursive
        - document.getElementById() and DOM traversal algos are recursive
        - Object traveral is recursive
        - IT'S EVERYWHERE

        - Sometimes a cleaner approach to itiration

    What happens when recursion happens?
        - In JS the call stack manages function invocation, when 
        a function is called it is placed on top of the call stack.
*/

//Call stack example

function takeShower() {
    return 'Showering'
}

function eatBreakfast() {
    let meal = cookFood();
    return `eating ${meal}`
}

function cookFood() {
    let items = ['eggs', 'bacon', 'toast'];
    return items;
}

function wakeUp() {
    takeShower();
    eatBreakfast();
    console.log('Ok, ready to go to work')
}

console.log(wakeUp())
