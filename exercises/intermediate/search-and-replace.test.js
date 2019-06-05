'use strict';

const mod = require('./search-and-replace'),
      fns = Object.keys(mod).map(key => mod[key]);

const tests = [
    {
        hay:         'a b c',
        needle:      'b',
        replacement: 'foo',
        val:         'a foo c'
    },
    {
        hay:         'a b b c',
        needle:      'b',
        replacement: 'foo',
        val:         'a foo foo c'
    },
    {
        hay:         'foobar baz',
        needle:      'bar',
        replacement: 'taco',
        val:         'foobar baz'
    },
    {
        hay:         'Let us go to the store',
        needle:      'store',
        replacement: 'mall',
        val:         'Let us go to the mall'
    }
];

fns.forEach(fn => {

    describe(`${ fn.name } should replace all instances of a string`, () => {

        let alwaysString = true;

        tests.forEach(testCase => {

            const { hay, needle, replacement, val } = testCase;

            const result = fn(hay, needle, replacement);

            if(typeof result !== 'string') alwaysString = false;

            test(`${ fn.name }('${ hay }', '${ needle }', '${ replacement }') should equal '${ val }'`, () => {
                expect(result).toBe(val);
            });
        });

        test('It should always return a string', () => {
            expect(alwaysString).toBe(true);
        });
    });
});
