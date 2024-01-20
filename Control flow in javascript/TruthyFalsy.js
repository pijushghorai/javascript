/*
Truthy values:
Values that are considered true when encountered in a boolean context.
Examples include: true, numbers other than 0, non-empty strings, arrays, objects, and functions.

Falsy values:
Values that are considered false when encountered in a boolean context.
Examples include: false, 0, an empty string ('' or ""), null, undefined, and NaN (Not a Number).
*/

// const userEmail = {} //[] //"pijushghorai.com" 
// if (userEmail) {
//     console.log("Got user Email");
// }
// else {
//     console.log("dont have user email");
// }

// const userEmail = "" //-0
// if (userEmail) {
//     console.log("Got user Email");
// }
// else {
//     console.log("dont have user email");
// }

// How to detact array or object empty or not
const userEmail = []
if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObject = {}
if (Object.keys(emptyObject).length === 0) { //it return the array
    console.log("Object is Empty");
}


/*
Nollish Coalescing Oparetor (??): null undefind

It is represented by ?? and is used to provide a default value for a variable if the variable is either null or undefined, but not for other falsy values like empty strings, 0, or false.
*/

let vall;
vall = 5 ?? 10  //output: 5
vall = null ?? 10  //output: 10
console.log(vall);

let vall2;
vall2 = undefined ?? 15  //output: 15
console.log(vall2);

let vall3;
vall3 = null ?? 10 ?? 10  //output: 10
console.log(vall3);



/*
Ternary Operator :
The ternary operator is a concise way to write conditional statements. It's often referred to as the "conditional operator"

If the condition is true, the expression before the : (colon) is evaluated.
If the condition is false, the expression after the : (colon) is evaluated.
*/

// condition ? true : false

const icecreamPrice = 100
icecreamPrice <= 80 ? console.log("Less then 80") : console.log("Grater then 80"); //output: Grater then 80