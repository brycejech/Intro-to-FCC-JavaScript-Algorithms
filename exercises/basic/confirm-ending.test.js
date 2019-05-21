'use strict';

const {
    confirmEnding,
    confirmEnding2,
    confirmEnding3,
    confirmEnding4
} = require('./confirm-ending');

const fns = [
    confirmEnding,
    confirmEnding2,
    confirmEnding3,
    confirmEnding4
];

const tests = [
    { str: 'hello',  sub: 'lo',   result: true  },
    { str: 'foobar', sub: 'bar',  result: true  },
    { str: 'spam',   sub: 'spam', result: true  },
    { str: 'eggs',   sub: 'ggz',  result: false },
    { str: 'burger', sub: ' er',  result: false },
    { str: 'tacos',  sub: 'zos',  result: false }
];

fns.forEach(fn => {

    describe(`${ fn.name } should confirm string endings`, () => {

        let alwaysBool = true;

        tests.forEach(testCase => {

            const { str, sub, result } = testCase;

            if(typeof fn(str, sub) !== 'boolean') alwaysBool = false;

            test(`${ fn.name }('${ str }', '${ sub }') should be '${ result }'`, () => {
                expect(fn(str, sub)).toBe(result);
            });
        });

        test(`It always returns a boolean`, () => {
            expect(alwaysBool).toBe(true);
        });

    });
});
