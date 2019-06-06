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
const reverse = str => str.split('').reverse().join('');

/*
    For-loop Solution
    -----------------

    1. Initialize an empty string that will be returned
    2. Loop over each character of the string from right to left
        2a. Concatenate the character onto reversed
    3. Return the result
*/
function reverse2(str){
    let reversed = '';

    for(let i = str.length - 1; i >= 0; i--) reversed += str[i];

    return reversed;
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
    let reversed = '';

    for(const char of str.split('')) reversed = `${ char }${ reversed }`;

    return reversed;
}

module.exports = {
    reverse,
    reverse2,
    reverse3
}
