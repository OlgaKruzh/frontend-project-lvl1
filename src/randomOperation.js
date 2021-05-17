export default () => {
  const randomNum = Math.round(Math.random() * 100)
  let operation = ''

  if (randomNum <= 33) {
    operation = '+'
  }
  if (randomNum >= 34 && randomNum <= 65) {
    operation = '-'
  }
  if (randomNum >= 66) {
    operation = '*'
  }
  return operation
}
