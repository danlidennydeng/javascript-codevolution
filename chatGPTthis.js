//default binding
// function show() {
//   console.log(this);
// }
// show();// In non-strict mode, `this` will refer to the global object (window in browsers). In strict mode, `this` will be undefined.

//implicit binding
// const user = {
//   name: "Alice",
//   greet() {
//     console.log(`Hello, ${this.name}`);
//   },
// };
// user.greet();// `this` refers to the `user` object.

//explicit binding
// function greet() {
//   console.log(`Hello, ${this.name}`);
// }

// const user = {
//   name: "Denny",
// };

// greet.call(user); // `this` refers to `user`

//new binding
function User(name) {
  this.name = name;
}

const user = new User("Peter");
console.log(user.name); // `this` refers to the new `User` instance.

//Trilium note for FULL chatGPT conversation

// How to Decide Which Binding to Use

// Use Implicit Binding when defining methods within objects or classes.

// Use Explicit Binding when you need to invoke functions with a specific this context, such as event handlers or method borrowing.

// Use New Binding when creating instances of objects using constructor functions or ES6 classes.

// Avoid relying on Default Binding to prevent unintended global context or undefined values in strict mode.
