/*
    Given an expression string exp, write a program to examine whether the pairs and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
    Example: 
    Input: exp = “[()]{}{[()()]()}” 
    Output: Balanced
    Input: exp = “[(])” 
    Output: Not Balanced 

    Algorithm:

    1) Declare a character stack which will hold an array of all the opening parenthesis.
    2) Now traverse the expression string exp.
    3) If the current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack.
    4) If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) then pop from stack and if the 
       popped character is the matching starting bracket then fine else parenthesis are not balanced.
    5) After complete traversal, if there is some starting bracket left in stack then “not balanced”
*/

function peek(stack)    {
    return stack[stack.length - 1];
}

function isBallanced(str)   {
    let stack = [];

    for(let i = 0; i < str.length; i++) {
        let char = str.charAt(i)
        if(char === '(' || char === '{' || char === '[')  {
            stack.push(char)
        } else if(char === ')' || char === '}' || char === ']')   {
            if(peek(stack) === '(' || peek(stack) === '{' || peek(stack) === '[') {
                stack.pop()
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isBallanced('[()]{}{[()()]()}'))
console.log(isBallanced('[(])'))
 