import startGame from '../index.js';
import createRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const brainEven = () => {
  const randomInt = createRandomNumber(0, 500);
  const expression = randomInt.toString();
  const correctAnswer = isEven(randomInt) ? 'yes' : 'no';

  return [expression, correctAnswer];
};

const runGame = () => startGame(description, brainEven);
export default runGame;
