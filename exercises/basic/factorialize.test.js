'use strict';

const { factorialize, factorialize2, factorialize3 } = require('./factorialize');

const fns = [ factorialize, factorialize2, factorialize3 ];

const tests = [
    { num: 5,   factorial: 120              },
    { num: 7,   factorial: 5040             },
    { num: 10,  factorial: 3628800          },
    { num: 13,  factorial: 6227020800       },
    { num: 17,  factorial: 355687428096000  },
    { num: 18,  factorial: 6402373705728000 }
];

fns.forEach(fn => {

    describe(`${ fn.name } should properly factorialize integers`, () => {

        let alwaysNum = true;

        tests.forEach(testCase => {

            const { num, factorial } = testCase;
            const result = fn(num);

            if(typeof result !== 'number') alwaysNum = false;

            test(`${ fn.name }(${ num }) should be ${ factorial }`, () => {
                expect(result).toBe(factorial);
            });
        });

        test(`It should always return a number`, () => {
            expect(alwaysNum).toBe(true);
        });
    });
});
