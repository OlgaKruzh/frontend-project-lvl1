const calculateAnswerProgression = (progression) => {
  // const progression = createProgression(); // создадим прогрессию
  let correctAnswer = 0
  let diffProgression = 0
  const indexOfString = progression.indexOf('..')
  // найдем значение разности прогрессии
  if (progression[0] === '..' || progression[1] === '..') {
    diffProgression = progression[3] - progression[2]
  } else {
    for (let i = 0; i < progression.length - 2; i += 1) {
      if (typeof (progression[i]) === 'number' && typeof (progression[i + 1]) === 'number') {
        diffProgression = progression[i + 1] - progression[i]
      }
    }
  }
  // indexOfString === 0 ? correctAnswer = progression[1] - diffProgression
  // : correctAnswer = progression[progression.indexOf('..') - 1] + diffProgression;
  if (indexOfString === 0) {
    correctAnswer = progression[1] - diffProgression
  } else {
    correctAnswer = progression[progression.indexOf('..') - 1] + diffProgression
  }

  return correctAnswer
}
export default calculateAnswerProgression
