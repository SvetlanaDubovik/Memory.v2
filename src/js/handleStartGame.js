import { Game } from './game';
import { handleCardClick } from './handleCardClick';
import { debounce } from './utils';
import { SETTINGS } from './settings';
import { Cards } from './cards';

const cards = new Cards();

export const game = new Game(cards);

export const handleStartGame = () => {
  clearGamePage();
  const startPage = document.querySelector('#startPage');
  const gamePage = document.querySelector('#gamePage');
  const endPage = document.querySelector('#endPage');
  const backgroundMusic = document.querySelector('#backgroundMusic');

  hidePage(startPage);
  hidePage(endPage);
  showPage(gamePage);

  //чтобы не было видно значения карт при перетаскивании таблицы с картами мышью
  gamePage.addEventListener('mousemove', evt => {
    evt.preventDefault();
  });

  backgroundMusic.src = '../dist/media/pinkPantera.mp3';
  
  game.startNew();

  const btnReload = document.querySelector('#reloadGame');
  btnReload.addEventListener('click', () => {
    debounce(() => {
      backgroundMusic.currentTime = 0;
      handleStartGame();
    }, SETTINGS.DEBOUNCE_INTERVAL_MS);
  });
};

const btnStart = document.querySelector('#startGame');
btnStart.addEventListener('click', handleStartGame);

const hidePage = page => {
  if (!page.classList.contains('hidden')) {
    page.classList.add('hidden');
  }
};

const showPage = page => {
  if (page.classList.contains('hidden')) {
    page.classList.remove('hidden');
  }
};

const clearGamePage = () => {
  const cardsContainer = document.querySelector('#cardsContainer');
  const cards = cardsContainer.querySelectorAll('.js-card');
  const cardsContainerList = document.querySelectorAll('.js-cards-container__item');
  cardsContainerList.forEach(card => card.removeEventListener('click', handleCardClick));
  cards.forEach(card => card.parentElement.removeChild(card));
};