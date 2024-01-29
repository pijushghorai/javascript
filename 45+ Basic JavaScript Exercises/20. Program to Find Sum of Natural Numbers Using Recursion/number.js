const naturalNum = (num) => {
    if (num > 0) {
        return num + naturalNum(num - 1)
    }
    else{
        return num
    }
}

const number = 20
const result = naturalNum(number)
console.log(`${number} Sum of Natural Numbers is ${result}`);
