// function sayMyName(name) {
//   console.log(`my name is ${name}`);
// }
// sayMyName("Walter White");
// sayMyName("Denny Deng");

//implicit binding
// const person = {
//   name: "Denny",
//   sayMyName: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };
// person.sayMyName();

//Explicit binding
// const person = {
//   name: "Denny",
//   sayMyName: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };
// //person.sayMyName();
// function sayMyName() {
//   console.log(`My name is ${this.name}`);
// }
// sayMyName.call(person);

//new binding
// function sayMyName() {
//   console.log(`My name is ${this.name}`);
// }

// function Person(name) {
//   this.name = name;
// }
// const p1 = new Person("Vishwas");
// const p2 = new Person("Batman");

// console.log(p1.name, p2.name);

//default binding
globalThis.name = "superman";
function sayMyName() {
  console.log(`My name is ${this.name}`);
}

function Person(name) {
  this.name = name;
}
const p1 = new Person("Vishwas");
const p2 = new Person("Batman");

sayMyName();

//This, keyword
// The javascript this keyword which is used in a function, refers to the object it belongs to.
//It makes functions reusable by letting you devide the object value
//this value is determined entirely by how a function is called.

//order of precedence: New binding(top), Explict binding, implicit binding, default binding.
