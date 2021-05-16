const calculateDcg = (a, b) => {
  let newA = a;
  let newB = b;
  if (newA % newB === 0) {
    return newB;
  }

  const iter = (counter, acc) => {
    if (counter % acc === 0) {
      return acc;
    }

    const c = newA % newB;
    newA = newB;
    newB = c;

    return iter(newA, newB);
  };
  return iter(newA, newB);
};

export default calculateDcg;
