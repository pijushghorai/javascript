const randomItem = (arr) => {
    let randomIndex = Math.round(Math.random() * arr.length)
    let item = arr[randomIndex]
    return item
}

const luckyDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
let result = randomItem(luckyDay)
console.log(`Your lucky day is ${result}`);