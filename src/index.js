import readlineSync from 'readline-sync';
// import randomOperation from './randomOperation.js';
import createExpression from './createExpression.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userInputName = readlineSync.question('May I have your Name? ');
  console.log(`Hello, ${userInputName}`);
  console.log('What is the result of the expression?');
  let i = 0;
  while (i < 3) {
    const expression = createExpression();
    const correctAnswer = parseInt(eval(expression), 10);
    const userInputAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);
    const userAnswer = parseInt(userInputAnswer, 10);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}`);
      console.log(`Let's try again, ${userInputName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userInputName}!`);
};