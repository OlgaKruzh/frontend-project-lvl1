import readlineSync from 'readline-sync';
// import gamingCalc from './gamingCalc';

const gaming = () => {
  console.log('Welcome to the Brain Games!');

  const userInputName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userInputName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i < 3) {
    const randomInt = Math.round(Math.random() * 100);
    const userInputAnswer = readlineSync.question(`Question: ${randomInt}\nYour answer: `);
    let correctAnswer = '';

    if (randomInt % 2 === 0) {
      correctAnswer = 'yes';
    }

    if (randomInt % 2 !== 0) {
      correctAnswer = 'no';
    }

    if (userInputAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userInputAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userInputName}!`);
      return;
    }

  //  return `Congratulations, ${userInputName}!`;
  }

  console.log(`Congratulations, ${userInputName}!`);
};

export default gaming;
