const SumofNaturalNumbers = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i
    }
    return sum;
}

const number = 20
const result = SumofNaturalNumbers(number)
console.log(`${number} Sum of Natural Numbers is ${result}`);