const lastDigit = (num)=>{
    let rslt = num % 10
    return rslt
}

const number = 2024
const result = lastDigit(number)
console.log(`The last digit of ${number} is ${result}`);
