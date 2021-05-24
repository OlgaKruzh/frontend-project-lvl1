import startGame from '../index.js';

const calculateAnswerProgression = (progression) => {
  // const progression = createProgression(); // создадим прогрессию
  let result = 0;
  let diffProgression = 0;
  const indexOfString = progression.indexOf('..');
  // найдем значение разности прогрессии
  if (progression[0] === '..' || progression[1] === '..') {
    diffProgression = progression[3] - progression[2];
  } else {
    for (let i = 0; i < progression.length - 2; i += 1) {
      if (typeof (progression[i]) === 'number' && typeof (progression[i + 1]) === 'number') {
        diffProgression = progression[i + 1] - progression[i];
      }
    }
  }
  if (indexOfString === 0) {
    result = progression[1] - diffProgression;
  } else {
    result = progression[progression.indexOf('..') - 1] + diffProgression;
  }

  return result;
};

const createProgression = () => {
  const randomDiff = Math.floor(Math.random() * 100); // случайная разность арифм прогрессии до 100
  const firstInt = Math.floor(Math.random() * 500); // случайное первое число прогрессии до 500
  const progressionLength = Math.floor(Math.random() * (10 - 4) + 4); // случайная длина массива + 1
  const progression = [firstInt]; // инициализация массва с первым элементом

  // наполняем массив
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progression[i] + randomDiff);
  }
  // определим случайный индекс, в котором заменим число точками
  const randomIndexToHide = Math.floor(Math.random() * (progressionLength) + 1);
  progression[randomIndexToHide] = '..';

  return progression;
};

const description = 'What number is missing in the progression?';

const brainProgression = () => {
  const progression = createProgression();
  const expression = progression.join(' ');
  let correctAnswer = calculateAnswerProgression(progression);
  correctAnswer = String(correctAnswer);

  return [expression, correctAnswer];
};

const runGame = () => startGame(description, brainProgression);
export default runGame;
