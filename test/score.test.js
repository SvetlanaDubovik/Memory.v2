const assert = require('assert');
const expect = require('chai').expect;

const Score = require('../src/js/score').Score;

describe('Score (только для 9 пар карт)', () => {

  let score;
  beforeEach(() => {
    score =  new Score();
  });
 
    it('getTotalScore() возвращает 0 при начальной инициализации', () => {
      assert.equal(score.getTotalScore(), 0);
    });

    it('toIcrease() возвращает 336 при первом совпадении карт', () => {
      score.toIncrease(1);
      assert.equal(score.getTotalScore(), 336);
    })

    it('возвращает 294 при несовпадении карт после первого совпадения', () => {
      score.toIncrease(1);
      score.toDecrease(1);
      assert.equal(score.getTotalScore(), 294);
    })

    it('функция reset() обнуляет totalScore', () => {
      score.toIncrease(1);
      score.reset();
      assert.equal(score.totalScore, 0);
    })

    it('функция getTotalScore возвращает значение totalScore', () => {
      score.toIncrease(1);
      expect(score.getTotalScore() === score.totalScore).to.be.true;
    })

    it('максимальный счет 1512, если все совпадения верны', () => {
       let i = 1;
       while(i < 9) {   
         score.toIncrease(i);
         i++;
       }   
      assert.equal(score.getTotalScore(), 1512);
    })

    it('счет может быть отрицательным', () => {
      score.toIncrease(1);
       let i = 9;
       while(i > 0) {   
        score.toDecrease(1);
         i--;
       }   
      assert.equal(score.getTotalScore(), -42);
    })

    it('Нет предела отрицательному счету', () => {
      score.toIncrease(1);
       let i = 99;
       while(i > 0) {   
        score.toDecrease(1);
         i--;
       }   
      assert.equal(score.getTotalScore(), -3822);
    })
    
});

