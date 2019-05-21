'use strict';

const { sumAll, sumAll2, sumAll3 } = require('./sum-range');

const fns = [ sumAll, sumAll2, sumAll3 ];

const tests = [
    { range: [1, 3],  sum: 6  },
    { range: [3, 1],  sum: 6  },
    { range: [-1, 5], sum: 14 },
    { range: [5, -1], sum: 14 },
    { range: [0, 10], sum: 55 },
    { range: [10, 0], sum: 55 }
];

fns.forEach(fn => {

    describe(`${ fn.name } should sum a range of numbers`, () => {

        let alwaysNum = true;

        tests.forEach(testCase => {
            const { range, sum } = testCase;

            const result = fn(range);

            if(typeof result !== 'number') alwaysNum = false;

            test(`${ fn.name }(${ JSON.stringify(range) }) should equal ${ sum }`, () => {
                expect(result).toBe(sum);
            });
        });

        test(`It should always return a number`, () => {
            expect(alwaysNum).toBe(true);
        });
    });
});
