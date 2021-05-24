import startGame from '../index.js';

const description = 'What is the result of the expression?';
const brainCalc = () => {
  const firstOperand = Math.round(Math.random() * 100);
  const secondOperand = Math.round(Math.random() * 100);
  const operations = ['+', '-', '*'];
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];
  const expression = `${firstOperand} ${randomOperation} ${secondOperand}`;

  let correctAnswer = parseInt(firstOperand, 10) + randomOperation + parseInt(secondOperand, 10);

  if (randomOperation === '+') {
    correctAnswer = parseInt(firstOperand, 10) + parseInt(secondOperand, 10);
  } else if (randomOperation === '-') {
    correctAnswer = parseInt(firstOperand, 10) - parseInt(secondOperand, 10);
  } else if (randomOperation === '*') {
    correctAnswer = parseInt(firstOperand, 10) * parseInt(secondOperand, 10);
  }

  correctAnswer = String(correctAnswer);

  return [expression, correctAnswer];
};

const runGame = () => startGame(description, brainCalc);
export default runGame;
