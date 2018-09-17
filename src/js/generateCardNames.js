import { getRandomArray } from './utils';
import { SETTINGS } from './settings';

const getSuitName = suitNumber => {
  let suitName = '';
  switch (suitNumber) {
    case 1:
      suitName = 'H';
      break;
    case 2:
      suitName = 'C';
      break;
    case 3:
      suitName = 'S';
      break;
    case 4:
      suitName = 'D';
      break;
  }
  return suitName;
};

const getValueName = valueNumber => {
  let valueName = '';
  switch (valueNumber) {
    case 1:
      valueName = 'A';
      break;
    case 11:
      valueName = 'J';
      break;
    case 12:
      valueName = 'Q';
      break;
    case 13:
      valueName = 'K';
      break;
    case 10:
      valueName = '0';
      break;
    default:
      valueName = valueNumber;
  }
  return valueName;
};

const getDeck = () => {
  let valueNumber = 0;
  let suitNumber = 0;
  let deck = [];
  for (let i = 0; i < 52; i++) {
    valueNumber = (i % 13) + 1;
    suitNumber = (i % 4) + 1;
    const value = getValueName(valueNumber);
    const suit = getSuitName(suitNumber);
    deck[i] = value + suit;
  }
  return deck;
};

const deck = getDeck();

export const generateCardNames = () => {
  const cardNames = getRandomArray(deck, SETTINGS.ALL_PAIRS);
  const doubleCardNames = cardNames.concat(cardNames);
  return getRandomArray(doubleCardNames, doubleCardNames.length);
};