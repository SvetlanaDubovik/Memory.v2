const assert = require('assert');
const expect = require('chai').expect;

const generateCardNames = require('../src/js/generateCardNames').generateCardNames;
const cards = generateCardNames();

describe('generateCardNames()', () => {

        it('возвращает массив длины 18', () => {
            assert.equal(cards.length, 18);
        });

        it('возвращает неупорядоченный массив', () => {
            const orderedCards = cards.slice().sort();
            const isEqual = orderedCards.some((x, i) => x != cards[i]);
            expect(isEqual).to.be.true;
        });
});