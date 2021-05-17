import readlineSync from 'readline-sync'
import correctAnswerIsPrime from './correctAnswerIsPrime.js'

export default () => {
  console.log('Welcome to the Brain Games!')
  const userInputName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userInputName}`)
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  let i = 0
  while (i < 3) {
    const number = Math.round(Math.random() * 500)
    const correctAnswer = correctAnswerIsPrime(number)
    const userInputAnswer = readlineSync.question(`Question: ${number}\nYour answer: `)

    if (userInputAnswer === correctAnswer) {
      console.log('Correct!')
      i += 1
    } else {
      console.log(`${userInputAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'`)
      console.log(`Let's try again, ${userInputName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userInputName}!`)
}
