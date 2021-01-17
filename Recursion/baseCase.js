/*
    When does recursion stop?
         - base cases end recursion
         - OR when a different input is passed in, in other
           words the part of an input changes as it parses the
           entire input
*/

/*
    Implement a function that counts down from 5.
*/

//regual for loop
function countDown(start) {
    for(let i = start; i > 0; i--)  {
        console.log(i)
    }
    console.log('all done')
}

// countDown(5)

//recursive solution
function countDownRecursively(num)  {
    if(num <= 0) {
        console.log('all done recursively')
        return; //if this return statement wasnt here it would keep decrementing for ever
    }
    console.log(num);
    num--;
    countDownRecursively(num)//recursive func call
}

countDownRecursively(5)