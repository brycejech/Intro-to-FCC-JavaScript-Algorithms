'use strict';

const mod = require('./everything-be-true'),
      fns = Object.keys(mod).map(k => mod[k]);

const tests = [
    {
        arr: [
            { 'foo': 'a', 'bar': 'b' },
            { 'foo': 1,   'bar': ''  },
            { 'foo': true            }
        ],
        prop: 'foo',
        val: true
    },
    {
        arr: [
            { 'foo': 'a', 'bar': 'b' },
            { 'foo': 1,   'bar': ''  },
            { 'foo': true            }
        ],
        prop: 'bar',
        val: false
    }
];

fns.forEach(fn => {

    describe(`${ fn.name } should evaluate if all objects have truthy value on supplied prop`, () => {

        let alwaysBool = true;

        tests.forEach(testCase => {
            const { arr, prop, val } = testCase;

            const result = fn(arr, prop);

            if(typeof result !== 'boolean') alwaysBool = false;

            test(`${ fn.name }(${ JSON.stringify(arr) }, "${ prop }") should be ${ val }`, () => {
                expect(result).toBe(val);
            });
        });

        test(`It should always return a boolean`, () => {
            expect(alwaysBool).toBe(true);
        });
    });
});
