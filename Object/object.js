// let userDetails = {
//     fastName : "Pijush",
//     lastName : "Ghorai",
//     role : "admin",
//     logincount : 29
// }

// console.log(userDetails);
// console.log(userDetails.fastName);

// console.table(userDetails)

// userDetails.logincount = 25
// console.log(userDetails);



let userDetailsCourse = {
    fastName : "Ram",
    lastName : "Mondal",
    role : "Student",
    googleLogin : true,
    courselist : [],
    buyCourse : function (cName) {
        this.courselist.push(cName)
    },
    getCourseCount : function (params) {
        return `${this.fastName} is enrolled in ${this.courselist.length} courses`
    },
}

console.log(userDetailsCourse.fastName);
userDetailsCourse.buyCourse('Pro Backend');
console.log(userDetailsCourse.courselist);
userDetailsCourse.buyCourse('React JS');
console.log(userDetailsCourse.courselist);
console.log(userDetailsCourse.getCourseCount());



// keys
console.log(Object.keys(userDetailsCourse));

// values
console.log(Object.values(userDetailsCourse));

// chaking key
console.log(userDetailsCourse.hasOwnProperty('fastName'));  //it returns true and false

// for in loop
let userDetails = {
    fastName : "Pijush",
    lastName : "Ghorai",
    role : "admin",
    logincount : 29
}

for (let x in userDetails) {
    // console.log(x);
    // console.log(userDetails[x]);
    console.log(`key is ${x} and value is ${userDetails[x]}`);
}

// -----------------------------------------//
//----------Higher Oredr Functions----------//
// -----------------------------------------//

// 1. Call Back - when a function call a function it is call as call back function
let isEven = (ele) => {
    return ele % 2 == 0;
}
let value = [2, 4, 6 ,8].every(isEven);
console.log(value);

// Mini Program
// create a function to squre
// it will nul square with a number
const callBack = (n) => {
    return n**2;
};
function cube(callBack, n) {
    return callBack(n) * n;
}
console.log(cube(callBack, 3));




// function course() {
//     console.log('welcome to full stack js web dev bootcamp');
// }
// setTimeout(course, 3000);

// setTimeout(() => {
//     console.log('hello');
// }, 4000);


// set Interval
// setInterval(() => {
//     console.log('hii');
// }, 1000);


// Foreach
let arr = ['hey', 'hii', 'hello', 'hola', 'namaste']
arr.forEach((val) => {
    console.log(val);
}) 


// Map
let number = [1, 2, 3, 4, 5, 6];
let store = number.map((num) => {
    return num * num
})

console.log(store);