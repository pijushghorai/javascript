// object lirails
const user = {
    userName: "aalupostoo",
    loginCount: 8,
    signIn: true,
    getUserDetails: function() {
        console.log("user details from database");
        console.log(`your user name is ${this.userName}`);
        console.log(this);
    }
}
// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);



// Constractor Function
function myUser (userName, logInCount, isLoggedIn) {
    this.userName = userName;
    this.logInCount = logInCount;
    this.isLoggedIn = isLoggedIn;
    this.grettings =  function() {
        console.log(`Welcome ${this.userName}`);
    }
    return this;
}
const userOne = new myUser("Sohan", 18, true);
const userTwo = new myUser("Debeshwari", 12, false);
console.log(userOne);
console.log(userTwo);