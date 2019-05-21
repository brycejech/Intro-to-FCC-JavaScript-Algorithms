'use strict';

const { reverse, reverse2, reverse3 } = require('./reverse-a-string');

const fns = [ reverse, reverse2, reverse3 ];

const tests = [
    { str: 'JavaScript', reversed: 'tpircSavaJ' },
    { str: 'Express',    reversed: 'sserpxE'    },
    { str: 'PostgreSQL', reversed: 'LQSergtsoP' },
    { str: 'Postman',    reversed: 'namtsoP'    },
    { str: 'GraphQL',    reversed: 'LQhparG'    }
];

fns.forEach(fn => {

    describe(`${ fn.name } should properly reverse strings`, () => {

        let alwaysString = true;

        tests.forEach(testCase => {

            const { str, reversed } = testCase;
            const result = fn(str);

            if(typeof result !== 'string') alwaysString = false;

            test(`${ fn.name }('${ str }') should equal '${ reversed }'`, () => {
                expect(result).toBe(reversed);
            });
        });

        test(`It should always return a string`, () => {
            expect(alwaysString).toBe(true);
        });
    });
});
