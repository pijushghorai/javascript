const isPrime = (num) => {
    if (num <= 1) {
        return "Not Prime";
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "Not Prime";
        }
    }

    return "Prime";
};

// const number = 5
const number = 6
const result = isPrime(number)
console.log(`${number} is ${result} number`);