'use strict';

const {
    destroyer,
    destroyer2,
    destroyer3,
    destroyer4,
    destroyer5
} = require('./seek-and-destroy');

const fns = [ destroyer, destroyer2, destroyer3, destroyer4, destroyer5 ];

const tests = [
    { args: [ [1, 2, 3], 3 ],           value: [ 1, 2 ]       },
    { args: [ [1, 2, 3], 2, 3 ],        value: [ 1 ]          },
    { args: [ [5, 9, 2], 5 ],           value: [ 9, 2 ]       },
    { args: [ [5, 9, 2, 9, 2], 5 ],     value: [ 9, 2, 9, 2 ] },
    { args: [ [1, 2, 3], 1, 2, 3 ],     value: [ ]            },
    { args: [ ['a', 'b', 'foo'], 'a' ], value: [ 'b', 'foo' ] }
];

fns.forEach(fn => {

    describe(`${ fn.name } should remove appropriate items`, () => {
        let alwaysArr = true;

        tests.forEach(testCase => {
            const { args, value } = testCase;

            const result = fn.apply(null, args);

            if(!Array.isArray(result)) alwaysArr = false;

            const call = `${ fn.name }(${ JSON.stringify(args[0]) }, ${ args.slice(1).join(', ') })`;
            test(`${ call } should equal [${ result.join(', ') }]`, () => {
                expect(result).toEqual(value);
            });
        });

        test(`It should always return an array`, () => {
            expect(alwaysArr).toBe(true);
        });
    });
});