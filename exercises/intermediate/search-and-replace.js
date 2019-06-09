'use strict';

/*
    Array-Based Solution
    --------------------

    1. Split the haystack on a single space character
    2. While the haystack still contains instances of needle
        2a. find the index of needle in the haystack
        2b. if the index is > 0 (always should be) splice it with the repalcement
    3. Join the haystack array back together on the space character used to split it

    This solution works but is a little too verbose and uses esoteric language features
    such as the tilde operator. It could also be improved by removing the check that
    idx is positive
*/
function replace(haystack, needle, replacement){

}

/*
    FP-Style Solution
    -----------------

    1. Split the haystack on space character
    2. Use .map to replace instances of needle with replacement
    3. Join the haystack array back together with spaces

    This is the most reliable solution, and is quite easy to read
*/
function replace2(haystack, needle, replacement){

}

/*
    String.prototype Solution
    -------------------------

    1. While the haystack has instances of needle
        1a. Use haystack.replace to replace needle with replacement
    2. Return the haystack

    This solution fails in instances where needle is a substring of another word.
    Running "npm test -- search-and-replace" will reveal this coding error
*/
function replace3(haystack, needle, replacement){

}

/*
    RegExp Solution
    ---------------

    1. Create a RegExp instance using needle and the global (g) flag
    2. Use haystack.replace to replace all instances of needle with replacement

    This solution is better than replace3 because we can use word boundaries (\b)
    to tell String.prototype.replace not to replace needle if it is a substring
    of another word. Alternatively, and perhaps more appropriately, a whitespace
    character (\s) can be used

    Take care using this solution, however, because certain regex literals that
    may appear within needle could cause this solution to be slow or, worse, give
    an incorrect result
*/
function replace4(haystack, needle, replacement){
    
}



module.exports = {
    replace,
    replace2,
    replace3,
    replace4
}
