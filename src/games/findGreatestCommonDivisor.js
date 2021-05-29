import startGame from '../index.js';
import createRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const calculateGcd = () => {
  const firstOperand = createRandomNumber(0, 700);
  const secondOperand = createRandomNumber(0, 700);
  const expression = `${firstOperand} ${secondOperand}`;
  const correctAnswer = gcd(firstOperand, secondOperand).toString();

  return [expression, correctAnswer];
};

const runGame = () => startGame(description, calculateGcd);
export default runGame;
