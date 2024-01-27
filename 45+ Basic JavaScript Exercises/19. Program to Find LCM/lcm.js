const findLCM = (num1, num2)=>{
    for (let i = 1; i <= num1*num2; i++) {
        if (i % num1 == 0 && i % num2 == 0) {
            return i
        }
    }
}

const number1 = 10
const number2 = 20
const result = findLCM(number1, number2)
console.log(`LCM of ${number1}, ${number2} is ${result}`);
