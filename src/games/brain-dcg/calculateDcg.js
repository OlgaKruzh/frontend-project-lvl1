const calculateDcg = (a, b) => {
  if (a % b === 0) {
    return b;
  }

  const iter = (counter, acc) => {
    if (counter % acc === 0) {
      return acc;
    }

    const c = a % b;
    a = b;
    b = c;

    return iter(a, b);
  };
  return iter(a, b);
};

export default calculateDcg;
