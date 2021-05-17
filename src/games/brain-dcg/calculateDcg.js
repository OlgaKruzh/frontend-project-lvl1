const calculateDcg = (a, b) => {
  let newA = a;
  let newB = b;
  if (newA === 0 || newB === 0) {
    return 1;
  }
  if (newA % newB === 0) {
    return newB;
  }

  const iter = (counter, acc) => {
    if (acc === 0 || counter === 0) {
      return 1;
    }
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
