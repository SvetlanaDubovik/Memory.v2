export const showScore = (score) => {
  const scoreField = document.querySelector('#score span');
  scoreField.textContent = score;
};  