const myHeros = ["IronMan", "SpiderMan", "SandMan", "SuperMan"];

// using index value
console.log(myHeros[1]);
console.log(myHeros[3]);


// using for loop
for (let i = 0; i < myHeros.length; i++) {
    const element = myHeros[i];
    console.log(element);
}

// using for in loop
for (const key in myHeros) {
    ;console.log(myHeros[key]);
}