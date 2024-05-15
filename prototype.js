function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

const person1 = new Person("Bruce", "Wayne");
//constructor function
const person2 = new Person("Clark", "Kent");

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person1.getFullName());

console.log(person2.getFullName());

// //person2 would not work, but if Person.prototype, then it would work
