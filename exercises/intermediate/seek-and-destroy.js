'use strict';

// ES5 implementation
function destroyer(arr){
    var args = [].slice.call(arguments).slice(1);

    // Note use of tilde operator (Bitwise NOT)
    return arr.filter(item => !~args.indexOf(item));
}

// ES6 using arguments object
function destroyer2(arr){
    const args = [].slice.call(arguments).slice(1);

    return arr.filter(item => !args.includes(item));
}

// ES6 one-liner
const destroyer3 = (arr, ...args) => arr.filter(n => !args.includes(n));

// Using forEach
function destroyer4(arr, ...args){
    const result = [];

    arr.forEach(item => {
        if(args.includes(item)) return;
        result.push(item);
    });
    return result;
}

// Using for loop
function destroyer5(arr, ...args){
    const result = [];

    for(let i = 0, len = arr.length; i < len; i++){
        if(args.includes(arr[i])) continue;
        result.push(arr[i]);
    }
    return result;
}

module.exports = {
    destroyer,
    destroyer2,
    destroyer3,
    destroyer4,
    destroyer5
}