'use strict';

/*
    ES5 Solution
    ------------

    1. Convert the arguments object to an array, exclude the 1st item
    2. Use Array.prototype.filter to remove items from the 'arr' argument that
       appear in the arguments array and return the result

    This solution gets the job done and stays true to the actual problem
    constraints (use of arguments object). However, it uses some esoteric features
    such as the tilde operator (~) and [].slice.call which is a less-used shorthand
    for Array.prototype.slice.call().
*/
function destroyer(arr){

}

/*
    ES6 Solution
    ------------

    1. Convert the arguments object to an array, exlude the 1st item
    2. Filter items out of the 1st array that appear in the arguments array and
       return the result

    This should be the preferred solution. It's true to the problem constraints,
    is much more readable, and is equivalent to the ES5 solution
*/
function destroyer2(arr){

}

/*
    ES6 1-liner
    -----------

    Also equivalent to the 2 above solutions, however is much more dense and,
    thus, harder to read (sparse is better than dense). It does, however, use the
    ES6 spread operator to capture the remaining arguments so we don't have to
    splice the result, which is nice.
*/
const destroyer3 = (arr, ...args) => undefined;

/*
    Array.prototype.forEach Solution
    --------------------------------

    1. Create an empty array to store the final result in
    2. Loop over each item in the first array
        2a. If the item appears in the array of additional arguments captured
            with the spread operator (rest operator), then return
        2b. Otherwise, push the item onto the final result array
    3. Return the result array

    This solution is similar to destoryer2, but uses a forEach loop instead.
    It requires slightly more mental overhead to read, but not much and is also
    a good solution.
*/
function destroyer4(arr, ...args){

}

/*
    For-loop Solution
    -----------------

    Equivalent to the forEach solution above, but uses a traditional for-loop
    instead. Because each segment of the loop is not evaluated inside a separate
    function context, we use the continue statement, rather than the return
    statement to move on to the next iteration.
*/
function destroyer5(arr, ...args){
    
}

module.exports = {
    destroyer,
    destroyer2,
    destroyer3,
    destroyer4,
    destroyer5
}
