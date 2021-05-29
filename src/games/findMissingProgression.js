import startGame from '../index.js';
import createRandomNumber from '../utils.js';

const createProgression = () => {
  const progression = [];
  const differenceBetweenMembers = createRandomNumber(0, 100);
  const firstMember = createRandomNumber(0, 500);
  const progressionLength = createRandomNumber(5, 8);
  progression[0] = firstMember;

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + differenceBetweenMembers);
  }
  return progression;
};

const substitute = '..';
const modifyProgression = (progression, indexToHide) => {
  let modifiedProgression = [];
  modifiedProgression = progression;
  modifiedProgression[indexToHide] = substitute;
  return modifiedProgression;
};

const description = 'What number is missing in the progression?';

const findMissingProgression = () => {
  const progression = createProgression();
  const indexToHide = createRandomNumber(0, progression.length - 1);
  let correctAnswer = progression[indexToHide];
  modifyProgression(progression, indexToHide);
  const expression = progression.join(' ');
  correctAnswer = correctAnswer.toString();

  return [expression, correctAnswer];
};

const runGame = () => startGame(description, findMissingProgression);
export default runGame;
