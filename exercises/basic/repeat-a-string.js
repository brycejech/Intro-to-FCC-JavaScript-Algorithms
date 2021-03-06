'use strict';

/*
    One-Liner
    ---------

    1. If n <= 0 return empty string
    2. Else Initialize a new array of length n
    3. Fill the array with str
    4. Join the array of str on empty string
    5. Return the result
*/
const repeat = (str, n) => n <= 0 ? '' : (new Array(n)).fill(str).join('');

/*
    Language Feature Solution
    -------------------------

    Equivalent to the one-liner above, just broken over multiple lines
*/
function repeat1(str, n){
	if(n <= 0) return '';
	return (new Array(n)).fill(str).join('');
}

/*
    ES6 Solution
    ------------

    1. If n <=return empty string
    2. Initialize a result variable to empty string
    3. Loop n times
        3a. Set repeated to repeated + str using string interpolation
    4. Return the result

    This solution is safer than using the addition operator if a numeric value
    is passed as the string to be repeated. Interpolation guarantees that the
    interpolated result is a string.
*/
function repeat2(str, n){
	if(n <= 0) return '';
	let repeated = '';
	for(let i = 0; i < n; i++) repeated = `${ repeated }${ str }`;
	return repeated;
}

/*
    While-loop Solution
    -------------------

    1. If n <= 0 return empty string
    2. Initialize a result variable to empty string
    3. While the length of repeated is less than the length of str times n
        3a. Add str to repeated
    4. Return the result

    This is the solution I would personally prefer, though that is just a matter
    of taste. Other devs may prefer the for-loop solution(s)
*/
function repeat3(str, n){
	if(n <= 0) return '';
	let repeated = '';
	while(repeated.length < str.length * n) repeated += str
	return repeated;
}

/*
    For-loop Solution
    -----------------

    1. If n <= 0 return empty string
    2. Initialize a result variable to empty string
    3. Loop n times
        3a. Add str to repeated
    4. Return the result
*/
function repeat4(str, n){
	if(n <= 0) return '';
	let repeated = '';
	for(let i = 0; i < n; i++) repeated += str;
	return repeated;
}

module.exports = {
    repeat,
    repeat1,
    repeat2,
    repeat3,
    repeat4
}