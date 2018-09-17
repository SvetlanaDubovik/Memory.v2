import { handleCardClick } from './handleCardClick';
import { debounce } from './utils';
import { SETTINGS } from './settings';

export class CardsActions {
  static showCard(card) {
    const cardBack = card.querySelector('.js-card__back');
    cardBack.classList.add('transparent');
  };

  static hideCard(card) {
    const cardBack = card.querySelector('.js-card__back');
    cardBack.classList.remove('transparent');
  };

  static deleteCard(card) {
    card.parentElement.removeChild(card);
  };

  static hideCardsPair(card1, card2) {
    CardsActions.hideCard(card1);
    CardsActions.hideCard(card2);
  };

  static deleteCardsPair(card1, card2) {
    CardsActions.deleteCard(card1);
    CardsActions.deleteCard(card2);
  };

  static showAndHideAllCards() {
    const gamePage = document.querySelector('#gamePage');
    const cardsContainerList = gamePage.querySelectorAll('.js-cards-container__item');
    cardsContainerList.forEach(card => CardsActions.showCard(card));
    
    debounce(() => {
      cardsContainerList.forEach(card => {
        CardsActions.hideCard(card)
        card.addEventListener('click', handleCardClick)
      });        
    }, SETTINGS.ALL_CARDS_SHOW_INTERVAL_MS);
  };
}