'use strict';

/*
    RegExp Solution
    ---------------

    1. Create a RegExp using the provided substring and anchor modifier
    2. Test the expression against the submitted string
    3. Return the result

    If str.endsWith is forbidden, this is the solution I would pick. It is simple
    and easy to understand. The only hiccups you might encounter are certain types
    of characters in sub that may be valid regex expressions
*/
function confirmEnding(str, sub){
    return new RegExp(`${ sub }$`).test(str);
}

/*
    String.prototype.lastIndexOf Solution
    -------------------------------------

    1. Find the last index of the substring within the string
    2. If it does not exist, return false
    3. If the length of the string minus the last index of the substring is equal
       to the substring length, return true

    This solution is slightly more complicated than the RegExp solution, but may
    be more reliable given that regex literals shouldn't cause it to break
*/
function confirmEnding2(str, sub){
    const lastIdx = str.lastIndexOf(sub);

    if(lastIdx < 0) return false;

    if(str.length - lastIdx === sub.length) return true;
}

/*
    For-loop Solution
    -----------------

    1. Compute an offset to correctly compare the positional characters of str
       and sub
    2. Loop over the characters of sub from right to left
        2a. If the character at the current position of sub does not match the
            character at the same position from the right of str, return false
    3. Return true

    This solution is the most difficult to wrap your head around, but should be
    the most efficient solution.
*/
function confirmEnding3(str, sub){
    const offset = str.length - sub.length;

    for(let i = sub.length - 1; i >= 0; i--){
        if(sub[i] !== str[i + offset]) return false;
    }

    return true;
}

/*
    Language Feature Solution
    -------------------------

    1. Let JavaScript do the work
    2. Profit

    Kind of cheating but... I'll allow it ;)
*/
function confirmEnding4(str, sub){ return str.endsWith(sub) }


module.exports = {
    confirmEnding,
    confirmEnding2,
    confirmEnding3,
    confirmEnding4
}
