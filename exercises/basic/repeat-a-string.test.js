'use strict';

const { repeat, repeat2, repeat3, repeat4 } = require('./repeat-a-string');

const fns = [ repeat, repeat2, repeat3, repeat4 ];

const tests = [
    { str: 'abc',        rounds: 3, result: 'abcabcabc'                      },
    { str: 'spam',       rounds: 4, result: 'spamspamspamspam'               },
    { str: 'eggs',       rounds: 2, result: 'eggseggs'                       },
    { str: 'foo',        rounds: 3, result: 'foofoofoo'                      },
    { str: 'bloodymary', rounds: 3, result: 'bloodymarybloodymarybloodymary' }
];

fns.forEach(fn => {

    describe(`${ fn.name } should properly repeat strings`, () => {

        let alwaysString = true;

        tests.forEach(testCase => {
            const { str, rounds, result } = testCase;
            const repeated = fn(str, rounds);

            if(typeof repeated !== 'string') alwaysString = false;

            test(`${ fn.name }('${ str }', ${ rounds }) should equal '${ result }'`, () => {
                expect(repeated).toBe(result);
            });
        });

        test(`It should always return a string`, () => {
            expect(alwaysString).toBe(true);
        });
    });
});
