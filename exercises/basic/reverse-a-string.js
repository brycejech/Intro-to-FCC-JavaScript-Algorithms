'use strict';

/*
    Array Solution
    --------------

    1. Split the string into single characters
    2. Reverse the array
    3. Join the array back on empty string
    4. Return the result

    This is the most common and recommended approach to solving this problem
*/
const reverse = str => undefined;

/*
    For-loop Solution
    -----------------

    1. Initialize an empty string that will be returned
    2. Loop over each character of the string from right to left
        2a. Concatenate the character onto reversed
    3. Return the result
*/
function reverse2(str){

}

/*
    For-of Solution
    ---------------

    1. Initialize an empty string that will be returned
    2. Split the string on empty string and loop over each character
        2a. Using a template literal, prepend the character onto reversed
    3. Return the result
*/
function reverse3(str){
    
}

module.exports = {
    reverse,
    reverse2,
    reverse3
}
