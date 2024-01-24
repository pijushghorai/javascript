const checkOddEven = ((num)=>{
    if (num % 2 === 0) {
        return "Even"
    }
    else{
        return "Odd"
    }
})

const number = 10
const result = checkOddEven(number)
console.log(`${number} is ${result} number`);