'use strict';

/*
    For-loop Solution
    -----------------

    1. Loop over each object in the array
        1a. If the object does not have a truthy value for the supplied property
            then return false
    2. Return true because all objects have been checked and none returned false

    This is the most efficient solution possible. It only has to loop every item
    in the array if all objects have a truthy value for the 'pre' property
*/
function truthCheck(arr, pre){
    for(let i = 0, len = arr.length; i < len; i++){
        if(!arr[i][pre]) return false;
    }
    return true;
}

/*
    For-of Solution
    ---------------

    This solution is equivalent to the solution above. Using a for-of loop,
    however, makes it much more readable and requires.

    This should be the preferred solution because it is highly efficient (it
    returns as soon as a determination can be made) and it is the most readable.
*/
function truthCheck2(arr, pre){
    for(const obj of arr){
        if(!obj[pre]) return false;
    }
    return true;
}

/*
    Array.prototype.filter Solution
    -------------------------------

    1. Filter the array by checking the falsy-ness of the 'pre' argument on each
       object
    2. If the length of the resulting array is greater than 0, return false,
       otherwise return true

    This solution, while fitting on a single line, is too dense. Also, checking
    the falsy-ness of o[pre] is a bit hard to follow. Essentially, we are keeping
    the falsy values in the resulting array and checking it's length to determine
    the return value.

    Aside from the dense-ness of this code, it also has to loop each item before
    returning a result
*/
function truthCheck3(arr, pre){
    return arr.filter(o => !o[pre]).length > 0 ? false : true;
}

/*
    Array.prototype.reduce Solution
    -------------------------------

    Do.Not.Do.This

    This solution requires a tremendous amount of mental overhead to parse and
    understand. It also has to loop every item to determine the result.
*/
function truthCheck4(arr, pre){
    return arr.reduce((acc, o) => {
        if(!acc) return false;
        return o[pre] ? true : false;
    }, true);
}

module.exports = {
    truthCheck,
    truthCheck2,
    truthCheck3,
    truthCheck4
}
