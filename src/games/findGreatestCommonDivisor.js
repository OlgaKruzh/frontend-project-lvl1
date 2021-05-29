import startGame from '../index.js';
import createRandomNumber from '../utils.js';

const calculateDcg = (a, b) => {
  let newA = a;
  let newB = b;
  if (newB === 0) {
    return 1;
  }
  if (newA === 0) {
    return newB;
  }
  if (newA % newB === 0) {
    return newB;
  }

  const iter = (counter, acc) => {
    if (acc === 0 || counter === 0) {
      return 1;
    }
    if (counter % acc === 0) {
      return acc;
    }

    const c = newA % newB;
    newA = newB;
    newB = c;

    return iter(newA, newB);
  };
  return iter(newA, newB);
};

const description = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const firstOperand = createRandomNumber();
  const secondOperand = createRandomNumber();
  const expression = `${firstOperand} ${secondOperand}`;
  const correctAnswer = calculateDcg(firstOperand, secondOperand).toString();

  return [expression, correctAnswer];
};

const runGame = () => startGame(description, brainGcd);
export default runGame;
