import { SETTINGS } from './settings';
  
const POINT = SETTINGS.POINT;
const ALL_PAIR = SETTINGS.ALL_PAIRS;
  
export class Score {
  constructor() {
    this.totalScore = 0;
  }

  toIncrease(deletedPairsCount) {
    this.totalScore += (ALL_PAIR - deletedPairsCount) * POINT;
  }

  toDecrease(deletedPairsCount) {
    this.totalScore -= deletedPairsCount * POINT;
  }
    
  reset() {
    this.openPairs = 0;
    this.totalScore = 0;
  };
    
  getTotalScore() {
    return this.totalScore;
  };
};