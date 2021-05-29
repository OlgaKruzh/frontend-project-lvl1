import startGame from '../index.js';
import createRandomNumber from '../utils.js';

const calculateAnswerProgression = (progression) => {
  let result = 0;
  let difference = 0;
  const indexOfString = progression.indexOf('..');

  if (progression[0] === '..' || progression[1] === '..') {
    difference = progression[3] - progression[2];
  } else {
    for (let i = 0; i < progression.length - 2; i += 1) {
      if (typeof (progression[i]) === 'number' && typeof (progression[i + 1]) === 'number') {
        difference = progression[i + 1] - progression[i];
      }
    }
  }
  if (indexOfString === 0) {
    result = progression[1] - difference;
  } else {
    result = progression[progression.indexOf('..') - 1] + difference;
  }

  return result;
};

const createProgression = () => {
  const differenceBetweenMembers = createRandomNumber(0, 100);
  const firstMember = createRandomNumber(0, 500);
  const progressionLength = createRandomNumber(5, 8);
  const progression = [firstMember];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + differenceBetweenMembers);
  }
  return progression;
};

const modifyProgression = (progression) => {
  let modifiedProgression = [];
  modifiedProgression = progression;
  const indexToHide = createRandomNumber(0, progression.length - 1);
  modifiedProgression[indexToHide] = '..';

  return modifiedProgression;
};

const description = 'What number is missing in the progression?';

const findMissingProgression = () => {
  const progression = createProgression();
  modifyProgression(progression);
  const expression = progression.join(' ');
  let correctAnswer = calculateAnswerProgression(progression);
  correctAnswer = correctAnswer.toString();

  return [expression, correctAnswer];
};

const runGame = () => startGame(description, findMissingProgression);
export default runGame;
