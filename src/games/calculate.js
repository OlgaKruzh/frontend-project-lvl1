import startGame from '../index.js';
import createRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const calculateCorrectAnswer = (firstOperand, secondOperand, randomOperation) => {
  switch (randomOperation) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`Unknown randomOperation : '${randomOperation}'!`);
  }
};
const calculate = () => {
  const firstOperand = createRandomNumber(0, 100);
  const secondOperand = createRandomNumber(0, 100);
  const operations = ['+', '-', '*'];
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  const expression = `${firstOperand} ${randomOperation} ${secondOperand}`;
  const correctAnswer = calculateCorrectAnswer(firstOperand, secondOperand,
    randomOperation).toString();
  return [expression, correctAnswer];
};

const runGame = () => startGame(description, calculate);
export default runGame;
