import readlineSync from 'readline-sync';

const startGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const userInputName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userInputName}`);
  console.log(description);

  let i = 0;
  while (i < 3) {
    const gameData = game();
    //console.log(gameData);
    const [expression, correctAnswer] = gameData;
    const userAnswer = readlineSync.question(`Question: ${expression}\nYour answer: `);
    //console.log(userAnswer + typeof (userAnswer));

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userInputName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userInputName}!`);
};

export default startGame;
