/*
    from Osman Medzhytov (privately):    4:03 PM
    2Write a function that would allow you to do this.
    var addSix = createBase(6);
    addSix(10); // returns 16
    addSix(21); // returns 27

*/

/*
my initial attempt without using closures

function addSix(input1, input2)  {
    return input1 + input2;
}

console.log(addSix(10, 600))
*/
function addTo(input)    {

    let add = function(inner)   {
        return input + inner
    }

    return add;
}

let addSix = new addTo(6)
console.log(addSix(21))


// closure challange
// sql vue
// ruby on rails
// react hooks
// general algos
// react redux



// Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
// Example: 
// Input: exp = “[()]{}{[()()]()}” 
// Output: Balanced
// Input: exp = “[(])” 
// Output: Not Balanced 

function isBallanced(n)  {
    let halfString = n.split(n.lenght)
    return halfString;
}

// console.log(isBallanced("[()]{}{[()()]()}"))

//SQL View

/*
    A view is an object stored in the database.

    It's basically a saved SQL statement in the database.

    How to create a view:
    1) Write the select query you'd like to use for the view
    2) add CREATE VIEW view_name_goes_here before the SELECT statement
       also inluding the AS keyword

        Example:

        CREATE VIEW olympic_games_list AS 
        SELECT id, games_year, season
        FROM games;
    
    3) Run the command to create the view.
        A message along the lines of "View Created" will appear

    Using the View:

    SELECT * 
    FROM olympic_games_list;

    And then just run it.
    This is basically a shortcut to save a query as its own "View"

    The View adds security and dependability of queries, alongside other benefits
    depending on the database used
*/