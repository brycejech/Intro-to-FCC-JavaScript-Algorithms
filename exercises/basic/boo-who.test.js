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
