'use strict';

/*
    typeof Solution
    ---------------

    Use the 'typeof' operator to check if bool is a boolean and return the result
*/
function booWho(bool){

}

/*
    Object.prototype Solution
    -------------------------

    Use the Object.prototype.toString method to determine the type

    This solution is more reliable in almost all cases for determining the true
    type of an object. However, it is a bit overkill for checking if a thing is
    a boolean.

    Here are some examples where 'typeof' can give incorrect results
        - typeof null // object
        - typeof NaN  // number
        - typeof []   // object

    Object.prototype.toString should also be favored when you may want to know
    more specifically what type a 'thing' is
        - Object.prototype.toString.call(new Date)) // '[object Date]'
        - Object.prototype.toString.call(/abc/)     // '[object RegExp]'
        - Object.prototype.toString.call(null)      // '[object Null]'
        - Object.prototype.toString.call(undefined) // '[object Undefined]'
*/
function booWho2(bool){

}

/*
    _type Helper Solution
    ---------------------

    Use the _type helper to determine if a thing is a boolean

    This solution is equally as overkill as solution 2 for this given problem
*/
function booWho3(bool){

}

function _type(thing){
    return Object.prototype.toString.call(thing).match(/\[object (.*?)\]/)[1].toLowerCase();
}

module.exports = {
    booWho,
    booWho2,
    booWho3
}
