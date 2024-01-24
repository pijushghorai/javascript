const largestNumber = ((a, b, c)=>{
    if (a > b && a > c) {
        return a
    }
    else if (b > a && b > c) {
        return b
    }
    else{
        return c
    }
})

const num1 = 24
const num2 = 62
const num3 = 12
const result = largestNumber(num1, num2, num3)
console.log(`The largest number is ${result}`);