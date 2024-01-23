// reduce()
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10


const myNum = [1, 2, 3]
// const myTotal =  myNum.reduce(function (acc, carvalue) {
//     console.log(`acc ${acc} and carValue ${carvalue}`);
//     return acc + carvalue
// }, 0)
// console.log(myTotal); //output: 6


//  using arrow function
const myTotal = myNum.reduce((acc, carValue)=>{
    return acc + carValue
})
console.log(myTotal); //output: 6


// Example 2
const shoppingCart = [
    {
        itemName : "Javascript Course",
        price : 6999
    },
    {
        itemName : "MARN Stack Course",
        price : 24999
    },
    {
        itemName : "Data Science Course",
        price : 29999
    }
]

const cartTotal = shoppingCart.reduce((acc, item)=>{
     return acc + item.price
}, 0)

console.log(`Total price to pay = ${cartTotal}`);