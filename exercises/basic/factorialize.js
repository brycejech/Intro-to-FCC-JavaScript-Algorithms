'use strict';

/*
    While-loop Solution
    -------------------

    1. Initialize the factorial result to 1
    2. While num is greater than 1
        2a. Set factorial to the result of factorial * num
        2b. Decrement num by 1
    3. Return the result

    This is the simplest, most easy to read solution
*/
function factorialize(num){
    let factorial = 1;

    while(num > 1) factorial *= num--;

    return factorial;
}

/*
    While-loop Solution (alt)
    -------------------

    1. Initialize factorial result to num
    2. Initialize a counter to 1
    3. While cur (the counter) is less than num
        3a. Set factorial to the result of factorial * cur
        3b. Increment cur by 1
    4. Return the result

    This solution has a little more to keep track of, though may be easier to
    follow for some readers. We tend to think of loops as counting upward, not
    downward. So for those who are more comfortable counting up, this may be the
    preferred solution
*/
function factorialize2(num){
    let factorial = num, cur = 1;

    while(cur < num) factorial *= cur++;

    return factorial;
}

/*
    Array.prototype.reduce Solution
    -------------------------------

    1. Initialize an array of length num
    2. Reduce the array, initialize with starting value of 1 for accumulator
        2a. For each iteration, capture the accumulator and loop index (i)
        2b. Return the result of accumulator * (i + 1)
    3. Return the reduced array

    "Your scientists were so preoccupied with whether or not they could, they
    didn’t stop to think if they should."
        - Ian Malcolm (Jeff Goldblum)

    Seriously, don't do this. It is dense, hard to follow, and uses more memory
    than the other solutions because it has to initialize an array of length num.
    Also, the .reduce method is much slower than for/while loops
*/
function factorialize3(num){
    return (new Array(num)).fill().reduce((acc, _, i) => acc * (i + 1), 1);
}

module.exports = {
    factorialize,
    factorialize2,
    factorialize3
}
