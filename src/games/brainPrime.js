import startGame from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const createReponse = (number) => {
  if (isPrime(number) === true) {
    return 'yes';
  }
  return 'no';
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  const number = Math.round(Math.random() * 500);
  const correctAnswer = createReponse(number);
  const expression = String(number);

  return [expression, correctAnswer];
};

const runGame = () => startGame(description, brainPrime);
export default runGame;
