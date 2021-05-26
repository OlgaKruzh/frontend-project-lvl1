import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  const randomInt = Math.round(Math.random() * 100);
  const expression = String(randomInt);
  let correctAnswer = '';

  if (randomInt % 2 === 0) {
    correctAnswer = 'yes';
  }

  if (randomInt % 2 !== 0) {
    correctAnswer = 'no';
  }

  return [expression, correctAnswer];
};

const runGame = () => startGame(description, brainEven);
export default runGame;
