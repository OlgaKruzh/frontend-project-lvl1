const isPrime = (num) => {
    if(num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i = i + 1) {
        if (num % 1 === 0) {
            return false;

        }
    }
    return true;
};

export default isPrime;
