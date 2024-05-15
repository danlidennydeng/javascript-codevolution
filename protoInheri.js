//inheritance is implemented through the concept of prototype, refered as prototypal inheritance

function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

function SuperHero(fName, lName) {
  Person.call(this, fName, lName);
  this.isSuperHero = true;
}

SuperHero.prototype.constructor = SuperHero;

SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.fightCrime = function () {
  console.log("Fighting crime...");
};

const batman = new SuperHero("Bruce", "Wayne");

console.log(batman.getFullName());

batman.fightCrime();
