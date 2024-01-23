const getRandomNumber = ((min, max)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min
})

const minNum = 1000
const maxNum = 1500
const randomNum = getRandomNumber(minNum, maxNum)
console.log(`Random value between ${minNum} and ${maxNum} is ${randomNum}`)