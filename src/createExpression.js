// import readlineSync from 'readline-sync';
import randomOperation from './randomOperation.js'

// const createExpression = () => {
//   const firstOperand = Math.round(Math.random() * 100);
//   const secondOperand = Math.round(Math.random() * 100);
//   const operation = randomOperation();
//   const expression = parseInt(firstOperand, 10) + operation + parseInt(secondOperand, 10);
//   return expression;
// };
// export default createExpression;

const createExpression = () => {
  const firstOperand = Math.round(Math.random() * 100)
  const secondOperand = Math.round(Math.random() * 100)
  const operation = randomOperation()
  const expression = `${firstOperand} ${operation} ${secondOperand}`
  return expression
}
export default createExpression
