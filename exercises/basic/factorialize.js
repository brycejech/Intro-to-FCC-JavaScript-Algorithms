'use strict';

// Starting from 1 and moving forwards
function factorialize(num){
    let factorial = 1;

    while(num >= 1) factorial *= num--;

    return factorial;
}

// Starting from num & moving backwards
function factorialize2(num){
    let factorial = num, cur = 1;

    while(cur < num) factorial *= cur++;

    return factorial;
}

// Using Array.prototype.reduce
// Don't do this ;)
function factorialize3(num){
    return (new Array(num)).fill().reduce((acc, _, i) => acc * (i + 1), 1);
}

module.exports = {
    factorialize,
    factorialize2,
    factorialize3
}
