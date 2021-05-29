import readlineSync from 'readline-sync';

const times = 3;
const startGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const userInputName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userInputName}`);
  console.log(description);

  for (let i = 0; i < times; i += 1) {
    const gameData = game();
    const [expression, correctAnswer] = gameData;
    const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userInputName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userInputName}!`);
};

export default startGame;
