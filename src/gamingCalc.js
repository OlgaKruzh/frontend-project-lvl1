/* eslint no-eval: 0 */
import createExpression from './createExpression.js'

export default () => {
  const expression = createExpression()
  const correctAnswer = parseInt(eval(expression), 10)
  console.log(`Question: ${expression}`)
  return correctAnswer
}
