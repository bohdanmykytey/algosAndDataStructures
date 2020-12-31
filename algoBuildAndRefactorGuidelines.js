//CONCRETE GAMEPLAN TO BUILDING BETTER ALGOS.

//Undestranding the problem

/*
1) Restate the problem in your own words
2) What are the inputs
3) What outputs should be coming out of the function
4) Can the outputs be determined from the inputs?
5) How do you properly label the important bids of data.
*/

//write a function that takes in two numbers and returns their sum
/*
1) Restate the problem in your own words
    - implement addition
2) What are the inputs
    - two ints, but can it work with a different number of inputs
3) What outputs should be coming out of the function
    - one int, a sum of the int inputs
4) Can the outputs be determined from the inputs?
    - yes.
5) How do you properly label the important bids of data.
*/

//Problem Solving

/*
Expmlore examples
1) Start with simple examples
2) Progress to more complex examples
3) Explore examples with empty inputs
4) Explore examples with invalid inputs
*/

//write a function that takes in a string and returns counts of each char in the str

//Break It Down
//the interviewr told us that we are keeping track of the numbers and only lower case letters

/*
Simplify

1) Find the core difficulty in what you are trying to do
2) Temporarily ignore the difficulty
3) Write a simplified solution
4) Then incorporate that difficulty back in.
*/


/*
function charCount(str) {
    //make object to return at end
    //loop over string
    //return object 
}
*/

function charCount(str) {
    //make object to return at end
    let result = {};
    //loop over string, for each char.
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        //if the number/letter AND is a key in the object, add it to 1
        if (result[char] > 0) {
            result[char]++
        //if number/letter AND not add it and set value to 1
        } else {
            result[char] = 1;
        }
    }
    //if char is something other than alphanumeric dont do anything
    //return object 
    return result; 
}

console.log(charCount('Hi there'))

/*
Look back and Refactor
 
1) Can you check the result?
2) Can you derive the result differently?
3) Can you understand it at a glance?
4) Can you use the results or methods for another problem?
5) Can you improve the performance of your solution?
6) Can you think of ways to refactor?
7) How have other people solved this problem? 
*/