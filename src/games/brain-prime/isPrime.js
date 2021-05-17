const isPrime = (num) => {
  if (num <= 1) {
    return false
  }
  if (num % 2 === 0) {
    return false
  }
  for (let i = 3; i < num; i += 1) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

export default isPrime
