/*
for loop syntex
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

/*
for (let index = 0; index <= 10; index++) {
    const element = index
    console.log(element);  //output: 1 2 3 4 5 6 7 8 9 10
}

for (let i = 0; i <= 10; i++) {
    const element = i
    console.log(element);  //output: 1 2 3 4 5 6 7 8 9 10
}
*/

for (let i = 0; i <= 10; i++) {
    const element = i
    if (i == 8) {
        console.log("8 is my day");
    }
    console.log(element)
}

for (let i = 1; i <= 10; i++) {
    console.log(`The outer loop value is ${i}`);
    for (let j = 1; j <=10 ; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

// Example using Array
let myArray = ["Batman", "Superman", "Spiderman", "Ironman"]
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}


// break and continune - break and continue are control flow statements used in loops to alter the normal flow of execution.
for (let index = 1; index <= 20; index++) {
    if (index == 8) {
        console.log(`Ditected 8`);
        break
    }
    console.log(`Value of index is ${index}`);
}

// continune
for (let index = 1; index <= 20; index++) {
    if (index == 8) {
        console.log(`Ditected 8`);
        continue
    }
    console.log(`Value of index is ${index}`);
}