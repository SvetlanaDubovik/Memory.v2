import { handleStartGame } from './handleStartGame';

export const  handleGameOver = finalCount => {
  const gamePage = document.querySelector('#gamePage');
  gamePage.classList.add('hidden');
  const endPage = document.querySelector('#endPage');
  endPage.classList.remove('hidden');
  const endPageHeader = endPage.querySelectorAll('.js-end-page__header');
  const scoreField = endPageHeader[1].querySelector('span');
  scoreField.textContent = finalCount;
  const backgroundMusic = document.querySelector('#backgroundMusic');

  if (finalCount >= 0) {
    backgroundMusic.src = '../dist/media/victory.mp3';

    if (endPageHeader[0].textContent === '') {
      endPageHeader[0].textContent = 'Поздравляем!';
    }

  } else {
    backgroundMusic.src = '../dist/media/silent.mp3';
    endPageHeader[0].textContent = '';
  }

  const gameAgain = document.querySelector('#gameAgain');
  gameAgain.addEventListener('click', () => {
    handleStartGame();
  });
};