const favFood = ["Biryani", "Kati Roll", "Kabiraji Cutlet", "Momo", "Mutton Kosha"]

console.log(favFood.length); //Array length
console.log(favFood.at(2)); //Get the third element of fruits using at()
console.log(favFood.join(" * ")); //joins all array elements into a string

let pushFood = favFood.push("RossoGolla")
console.log(favFood);

let popFood = favFood.pop()
console.log(favFood);

