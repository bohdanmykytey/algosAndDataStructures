/*
    Most basic way of counting a smaller string appears in a longer string.

    Basic Steps:
     - loop over the longer string
     - loop over the shorter string
     - if the chars don't match, break out of the inner loop
     - if the chars do match keep going
     - if you complete the inner loop and finish a match,
       increment the found count matches
*/

function naiveSearch(long, short)   {
    let count = 0;
    for(let i = 0; i < long.length; i++)    {
        for(let j = 0; j < short.length; j++)   {
            console.log(short[j] !== long[i+j])
            if(short[j] !== long[i+j])  {
                console.log('break')
                break;
            }
            if(j === short.length - 1) {
                console.log("found a match")
                count++;
            }
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol"))