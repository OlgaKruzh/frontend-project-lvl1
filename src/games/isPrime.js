import startGame from '../index.js';
import createRandomNumber from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) if (num % i === 0) return false;
  return num > 1;
};

const createReponse = (number) => {
  if (isPrime(number) === true) {
    return 'yes';
  }
  return 'no';
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const calculateIsPrime = () => {
  const number = createRandomNumber(0, 500);
  const correctAnswer = createReponse(number);
  const expression = number.toString();

  return [expression, correctAnswer];
};

const runGame = () => startGame(description, calculateIsPrime);
export default runGame;
