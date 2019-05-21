'use strict';

// RegExp FTW
// If str.endsWith is not allowed, this is the solution I would pick
function confirmEnding(str, sub){
    return new RegExp(`${ sub }$`).test(str);
}

// String.prototype.lastIndexOf solution
function confirmEnding2(str, sub){
    const lastIdx = str.lastIndexOf(sub);

    if(lastIdx < 0) return false;

    if(str.length - lastIdx === sub.length) return true;
}

// Iterative solution
// Hard to read and understand, but most efficient solution
function confirmEnding3(str, sub){
    const offset = str.length - sub.length;

    for(let i = sub.length - 1; i >= 0; i--){
        if(sub[i] !== str[i + offset]) return false;
    }

    return true;
}

// Kind of cheating, but... I'll allow it ;)
function confirmEnding4(str, sub){ return str.endsWith(sub) }


module.exports = {
    confirmEnding,
    confirmEnding2,
    confirmEnding3,
    confirmEnding4
}
