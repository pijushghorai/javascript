// Inheritance
class UserOne {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.score = 0;
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

class UserTwo extends UserOne {
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}





