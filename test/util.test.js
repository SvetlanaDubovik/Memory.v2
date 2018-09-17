const assert = require('assert');
const expect = require('chai').expect;

const getRandomArray = require('../src/js/utils').getRandomArray;
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('Utils', () => {

    describe('getRandomArray', () => {        

        //кажется, что этот тест лишний
        it('возвращает массив', () => {
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            const values = getRandomArray(arr, 9);
            expect(Array.isArray(values)).to.be.true;
        });

        it('возвращает массив заданной длины', () => {
            const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            const values = getRandomArray(arr, 9);
            assert.equal(values.length, 9);
        });

        it('возвращает неупорядоченный массив', () => {
            const values = getRandomArray(arr, 9);
            const orderedValues = values.slice().sort();
            const isEqual = orderedValues.some((x, i) => x != values[i]);
            expect(isEqual).to.be.true;
        });

        it('возвращает только уникальные значения', () => {
            const values = getRandomArray(arr, 6);
            const isEqual = values.some((x, i) => values.slice(i + 1).includes(x));
            expect(isEqual).to.be.false;
        });
    });
});