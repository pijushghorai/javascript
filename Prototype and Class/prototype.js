let arrayOne = [1, 2, 3];

let userName = function (name, count) {
    this.name = name;
    this.count = count;
    this.getCourseCount =function () {
        console.log(`The course count is ${this.count}`);
    };
};

userName.prototype.getName = function () {
    console.log(`The user Name is ${this.name}`);
}

let userOne = new userName('Pijush', 2);
userOne.getCourseCount();

//-------------------------------------------//

// Prototypal Inharitance
let objOne = {
    fullName: 'Pijush Ghorai',
    add: 'Kolkata',
    getName: function () {
        console.log(this.fullName + ' ' + this.add);
    },
};

let objtwo = {
    fullName: 'Ritwika Tiary',
}

objtwo.__proto__= objOne;

console.log(objtwo);
objtwo.getName();