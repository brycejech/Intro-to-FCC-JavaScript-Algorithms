'use strict';

const mod = require('./boo-who'),
      fns = Object.keys(mod).map(k => mod[k]);

/*
    TODO
    ----

    Tests should be objects with an expected result included, rather than rely
    on the _type helper, which is most certainly also used for implementation
    of the various booWhos being tested.
*/
const tests = [
    'abc',
    123,
    -123,
    Infinity,
    { foo: 'bar' },
    [ 1, 2, 3 ],
    new Date(),
    () => {},
    true,
    false
];

fns.forEach(fn => {

    describe(`${ fn.name } should properly identify booleans`, () => {

        let alwaysBool = true;

        tests.forEach(testCase => {

            const type = _type(testCase);

            if(typeof fn(testCase) !== 'boolean') alwaysBool = false;

            test(`It should work with "${ testCase }" of type "${ type }"`, () => {
                const isBool = type === 'boolean';
                expect(fn(testCase)).toBe(isBool ? true : false);
            });

        });

        test(`It always returns a boolean`, () => {
            expect(alwaysBool).toBe(true);
        });
    });
});

function _type(thing){
    return Object.prototype.toString.call(thing).match(/\[object (.*?)\]/)[1].toLowerCase();
}
