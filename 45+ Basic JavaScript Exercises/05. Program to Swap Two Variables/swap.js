const swapvar = ((num1, num2)=>{
    num1 = num1 + num2
    num2 = num1 - num2
    num1 = num1 - num2
    return [num1, num2]
})

const result = swapvar(55, 22);
console.log(`Swaped Variable = ${result[0]} ${result[1]}`)


