const createProgression = () => {
  const randomDiff = Math.floor(Math.random() * 100) // случайная разность арифм прогрессии до 100
  const firstInt = Math.floor(Math.random() * 500) // случайное первое число прогрессии до 500
  const progressionLength = Math.floor(Math.random() * (10 - 4) + 4) // случайная длина массива + 1
  const progression = [firstInt] // инициализация массва с первым элементом

  // наполняем массив
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progression[i] + randomDiff)
  }
  // определим случайный индекс, в котором заменим число точками
  const randomIndexToHide = Math.floor(Math.random() * (progressionLength) + 1)
  progression[randomIndexToHide] = '..'

  return progression
}
export default createProgression
