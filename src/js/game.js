import { Score } from './score';
import { showScore } from './showScore';
import { SETTINGS } from './settings';
import { handleGameOver } from './handleGameOver';
import { CardsActions } from './cardsActions';

const ALL_PAIRS = SETTINGS.ALL_PAIRS;
const CARDS_PAIR_SHOW_INTERVAL_MS = SETTINGS.CARDS_PAIR_SHOW_INTERVAL_MS;
const successSound = document.querySelector('#successSound');

export const score = new Score();

export class Game {
  constructor(cards) {
    this.cards = cards;
    this.shownCards = [];
    this.deletedPairsCount = 0;     
  };

  startNew() {
    score.reset();
    showScore(score.getTotalScore());   
    this.cards.refresh();    
    this.cards.createCardsList();
    CardsActions.showAndHideAllCards();
    this.shownCards = [];
    this.deletedPairsCount = 0;
  };

  processCardClick(card) {
    if (this.shownCards.length < 2 && this.shownCards.indexOf(card) === -1) {
      CardsActions.showCard(card);
      this.shownCards.push(card);

      if (this.shownCards.length === 2) {
        this.cards.areTheSame(this.shownCards[0], this.shownCards[1]) ?
          setTimeout(this.handleSuccessfullStep.bind(this), CARDS_PAIR_SHOW_INTERVAL_MS) :
          setTimeout(this.handleFailStep.bind(this), CARDS_PAIR_SHOW_INTERVAL_MS);
      }
    }
  };

  handleFailStep() {
    score.toDecrease(this.deletedPairsCount);
    showScore(score.getTotalScore());
    CardsActions.hideCardsPair(this.shownCards[0], this.shownCards[1]);
    this.shownCards = [];
  };

  handleSuccessfullStep() {   
    CardsActions.deleteCardsPair(this.shownCards[0], this.shownCards[1]);
    this.deletedPairsCount++;
    score.toIncrease(this.deletedPairsCount);
    showScore(score.getTotalScore());    
    successSound.play();
    this.shownCards = [];

    if (this.deletedPairsCount === ALL_PAIRS) {
      handleGameOver(score.getTotalScore());
    }
  };
};