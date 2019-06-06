'use strict';

/*
    For-of Solution
    ---------------

    1. Get a range of numbers using the _range helper
    2. Initialize a result (sum) to 0
    3. Loop over each number in the range, adding it to the sum
    4. return the sum

    Simple, easy to understand solution. The .apply call here is used so that
    start and end don't need to be extracted from the range argument before being
    passed to the _range helper
*/
function sumAll(range){
    range = _range.apply(null, range);

    let sum = 0;

    for(let num of range) sum += num;

    return sum;
}

/*
    Array.prototype.reduce Solution
    -------------------------------

    1. Get a range of numbers using the _range helper
    2. Use .reduce to loop over each number in the range
        2a. add the number to the accumulator and return the result
    3. Return the result of the .reduce call

    This problem is very well suited to the .reduce method, although it is dense

    Anytime you need to take an array of items and convert them into a single result
    such as a sum, a string, an object, etc... you should always think of reduce
    because you want to "reduce the array down to a single thing"

    This solution could be made more readable while still using the reduce method
    breaking it up over several lines of code
*/
function sumAll2(range){
    return _range.apply(null, range).reduce((acc, num) => acc + num);
}

/*
    While-loop Solution (without _range helper)
    -------------------

    1. Extract the start and end from the range
    2. Initialize a sum variable that will be returned
    3. If start is greater than end, swap them (destructuring FTW)
    4. Use a while loop to iterate as many times as there are numbers between
       start and end
        4a. Add the current start value to the sum and increment it for the next
            iteration
    5. return the sum

    This solution is nice for several reasons
        - It has the lowest memory footprint of any other solution
            - It never stores the entire range of numbers
        - You get to harness destructuring to swap two variables
        - It is also the most efficient solution
            - No time is spent computing the range

    In most circumstances, this is the solution I would probably choose
*/
function sumAll3(range){
    let [start, end] = range, sum = 0;

    if(start > end) [ start, end ] = [ end, start ];

    while(start <= end) sum += start++;

    return sum;
}

/*
    Range Helper Fn
    ---------------

    This helper function takes in a low and high value and swaps them if the low
    value is actually the high value. It then adds each number between low and high
    (inclusive) until each number in the range is computed

    To remain true to form, if the supplied high and low values were reversed,
    it returns the reverse of the range. The range function should not care about
    the use-case of computing a range. Rather, it should respect the callee.

    In other words, when summing an array of numbers the order does not matter.
    However, there may be other circumstances where a range is needed but the
    order should not change.
*/
function _range(low, high){
    const range = [], isReversed = low > high;

    if(isReversed) [low, high] = [high, low];

    while(low <= high) range.push(low++);

    return isReversed ? range.reverse() : range;
}

module.exports = {
    sumAll,
    sumAll2,
    sumAll3
}
