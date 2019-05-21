'use strict';

// Iterative solution
function sumAll(range){
    range = _range.apply(null, range);

    let sum = 0;

    for(let num of range) sum += num;

    return sum;
}

// Using reduce
function sumAll2(range){
    return _range.apply(null, range).reduce((acc, num) => acc + num);
}

// Without a range helper
function sumAll3(range){
    let [start, end] = range, sum = 0;

    if(start <= end){
        while(start <= end) sum += start++;

        return sum;
    }

    while(end <= start) sum += end++;

    return sum;
}

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
