// for of loop
const myArr = [1, 2, 3, 4, 5]
for (const num of myArr) {
    console.log(num);
}

const myFevCartoons = ["Doraemon", "Tom & Jerry", "Shinchan", "Ban 10", "Mr. Bean"]
for (const cartoons of myFevCartoons) {
    console.log(cartoons);
}

const message = "Hello"
for (const mess of message) {
    console.log(mess);    
}


// Maps - only select uniqe values
const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("IN", "India")
console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key, "for" ,value);
}

const myObject = {
    "Name" : "Pijush",
    "Language" : "JavaScript",
    "Type" : "Basic"
}
for (const [myob, myobValues] of myObject) {
    console.log(myob, myobValues);
} //Output- myObject is not iterable

