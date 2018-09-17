import { generateCardNames } from './generateCardNames';

export class Cards {
  constructor() {
    this.cardNames = generateCardNames();
  }

  createCardsList() {
    const gamePage = document.querySelector('#gamePage');
    const cardsContainerList = gamePage.querySelectorAll('.js-cards-container__item');
    cardsContainerList.forEach((card, i) => card.appendChild(createCard(this.cardNames[i], i)));
  }

  refresh() {
    this.cardNames = generateCardNames();
  };

  areTheSame(card1, card2) {
    return this.cardNames[card1.id] === this.cardNames[card2.id];
  };
};

const createCardBack = () => {
  const card = document.createElement('div');
  card.classList.add('card__back');
  card.classList.add('js-card__back');
  return card;
};

const createCard = (imgSrc, cardId) =>{
  const card = document.createElement('div');
  card.id = cardId;
  card.classList.add('card');
  card.classList.add('js-card');
  const cardImg = document.createElement('img');
  cardImg.setAttribute('alt', 'card');
  cardImg.src = '../dist/img/' + imgSrc + '.png';
  cardImg.width = '100';
  cardImg.height = '140';
  card.appendChild(cardImg);
  card.appendChild(createCardBack());
  return card;
};