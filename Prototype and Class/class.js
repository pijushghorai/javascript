// Class
// class User {
//     constructor(firstName = 'Javascript', lastName = 'Web Developer', email, mob) {
//         this.firstName = firstName;,
//         this.lastName = lastName;
//         this.email = email;
//         this.mobile = mob;
//     }
//     getFullName() {
//         const fullName = this.firstName +  ' ' + this.lastName;
//         return fullName;
//     }
// }

// let user1 = new User('Pijush', 'Ghorai', 'pghorai098@gmail.com', '9876543210');
// console.log(user1);
// console.log(user1.getFullName());


// let user2 = new User('Ritwika', 'Tiary', 'ritu@gmail.com', '9876543210');
// console.log(user2);
// console.log(user2.getFullName());


// let user3 = new User('', '', 'newuser@gmail.com', '9876543210');
// console.log(user3);



// getter and setter
// class User {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     get getFirstName() {
//         return this.firstName;
//     }
//     get getLastName() {
//         return this.lastName;
//     }
// }

// let user1 = new User('Javascript', 'WebDeveloper');
// console.log(user1.getFirstName);
// console.log(user1.getLastName);



// setter
// class User {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.score = 0
//     }
  
//     get getFirstName() {
//         return this.firstName;
//     }
//     get getLastName() {
//         return this.lastName;
//     }

//     set setScore(score) {
//         this.score = score;
//     }

//     get getScore() {
//         return this.score;
//     }
// }

// let user1 = new User('Javascript', 'WebDeveloper');
// console.log(user1.getFirstName);
// console.log(user1.getLastName);


// console.log(user1.getScore);
// user1.setScore = 8;
// console.log(user1.getScore);