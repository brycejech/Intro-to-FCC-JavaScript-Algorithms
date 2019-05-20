'use strict';

// One-liner
const repeat = (str, n) => n <= 0 ? '' : (new Array(n)).fill(str).join('');

// Language features solution
function repeat1(str, n){
	if(n <= 0) return '';
	return (new Array(n)).fill(str).join('');
}
// ES6 solution, safer than for/while (if non-string passed)
function repeat2(str, n){
	if(n <= 0) return '';
	let repeated = '';
	for(let i = 0; i < n; i++) repeated = `${ repeated }${ str }`;
	return repeated;
}

// While loop solution
function repeat3(str, n){
	if(n <= 0) return '';
	let repeated = '';
	while(repeated.length < str.length * n) repeated += str
	return repeated;
}

// For loop solution
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