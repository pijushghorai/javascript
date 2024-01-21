// for in loop

const myObject = {
    "js" : "Javascript",
    "py" : "Python",
    "java" : "java",
    "cpp" : "C++"
}

for (const key in myObject) {
    console.log(key);
}

for (const key in myObject) {
    console.log(myObject[key]);
}

for (const key in myObject) {
    console.log(`${key} for ${myObject[key]}`);
}


// for in loop using array
const webDev = ["HTML", "CSS", "JavaScript"]
for (const wd in webDev) {
    console.log(webDev[wd]);
}


const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("IN", "India")
for (const key in map) {
    console.log(key); //Nothing Print
}