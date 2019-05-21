'use strict';

const { booWho, booWho2, booWho3 } = require('./boo-who');

const fns = [
    booWho, booWho2, booWho3
];

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
        tests.forEach(testCase => {

            const type = _type(testCase);

            test(`It should return a boolean`, () => {
                expect(typeof fn(testCase)).toBe('boolean');
            });

            test(`It should work with "${ testCase }" of type "${ type }"`, () => {
                const isBool = type === 'boolean';
                expect(fn(testCase)).toBe(isBool ? true : false);
            });
        });
    });
});

function _type(thing){
    return Object.prototype.toString.call(thing).match(/\[object (.*?)\]/)[1].toLowerCase();
}
