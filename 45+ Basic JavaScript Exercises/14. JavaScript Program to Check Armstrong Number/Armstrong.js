const checkArmstrongNumber = (num)=>{
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10
        sum = sum + (digit ** 3)
        temp = Math.floor(temp / 10)
    }
    if (sum === num) {
        return "Armstrong Number"
    }
    else{
        return "Not Armstrong Number"
    }
}

// const number = 153
const number = 371
const result = checkArmstrongNumber(number)
console.log(`${number} is ${result}`);
