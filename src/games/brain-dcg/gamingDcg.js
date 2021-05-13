import readlineSync from 'readline-sync';
import randomInt from './randomInt.js';
import calculateDcg from './calculateDcg.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userInputName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userInputName}`);
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    const a = randomInt();
    const b = randomInt();
    const correctAnswer = parseInt(calculateDcg(a, b), 10);
    const userInputAnswer = readlineSync.question(`Question: ${a} ${b}\nYour answer: `);
    const userAnswer = parseInt(userInputAnswer, 10);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userInputName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userInputName}!`);
};
