import readlineSync from 'readline-sync';
import createProgression from './createProgression.js';
import calculateAnswerProgression from './calculateAnswerProgression.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userInputName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userInputName}`);
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const progression = createProgression();
    const correctAnswer = calculateAnswerProgression(progression);
    const progressionString = progression.join(' ');
    const userInputAnswer = readlineSync.question(`Question: ${progressionString}\nYour answer: `);
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
  return;
};
