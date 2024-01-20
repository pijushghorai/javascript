//If Statement
// if (true) {
//     //your code
// }
// if (false) {
//     //your code
// }


// <, >, <=, >=, ==, !=, ===

const isUserLogin = true
if (2 == "2"){
    console.log("executed");
}

if (2 === "2"){
    console.log("executed");
}

if (2 != 3){
    console.log("executed");
}

// const tempetature = 41
// if (tempetature < 50) {
//     console.log("less then 50");
// }
// else{
//     console.log("tempetature is grater then 50");
// }

const tempetature = 55
if (tempetature < 50) {
    console.log("less then 50");
}
else{
    console.log("tempetature is grater then 50");
}

// const scoure = 200
// if (scoure > 100) {
//     const power = "fly"
//     console.log(`User power ${power}`);
// }
// console.log(`User power ${power}`); 
// ReferenceError: power is not defined


// short hand note
const balance = 1000
// if (balance > 500) console.log("test");
// if (balance > 500) console.log("test1"),
// console.log("test2");

if (balance < 500) {
    console.log("less then 500");
}
else if (balance < 750) {
    console.log("less then 750");
}
else if (balance < 900) {
    console.log("less then 900");
}
else {
    console.log("less then 1200");
}

// Shopping example
const isUserLoggedin = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedin && debitCard & 2 == 2){
    console.log("Allow to shopping"); //multiple condition check both condition true then it print result
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In"); //multiple condition check if any condition true it print result
}