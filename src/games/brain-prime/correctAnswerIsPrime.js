import isPrime from './isPrime.js'

export default (number) => {
  if (isPrime(number) === true) {
    return 'yes'
  }
  return 'no'
}
