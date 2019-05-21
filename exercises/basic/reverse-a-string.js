'use strict';

// One-liner
const reverse = str => str.split('').reverse().join('');

// Reverse iteration
function reverse2(str){
    let reversed = '';

    // Concat onto "reversed" by walking the string back to front
    for(let i = str.length -1; i >= 0; i--) reversed += str[i];

    return reversed;
}

// Prepending solution
function reverse3(str){
    let reversed = '';

    // Walk the string front to back and prepend each char to "reversed"
    for(const char of str.split('')) reversed = `${ char }${ reversed }`;

    return reversed;
}

module.exports = {
    reverse,
    reverse2,
    reverse3
}
