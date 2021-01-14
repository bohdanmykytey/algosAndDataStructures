/*
    write a function that compares to pos ints and find out if the 2 nums
    have the same frequency of digits
    sameFrequency(182, 281)//true
    sameFrequency(23, 12)//false
*/

function sameFrequency(int1, int2){
    let string1 = int1.toString();
    let string2 = int2.toString();

    if(string1.length !== string2.length) return false;
    
    let count1 = {};
    let count2 = {};
    
    for (let i = 0; i < string1.length; i++)    {
        count1[string1[i]] = (count1[string1[i]] || 0 ) + 1;
    }
    
    for (let j = 0; j < string1.length; j++)    {
        count2[string2[j]] = (count2[string2[j]] || 0 ) + 1;
    }
    
    for(let key in count1)  {
        if(count1[key] !== count2[key]) return false;
    }
    
    return true;
}

console.log(sameFrequency(13, 32))

//O(N) time complexity