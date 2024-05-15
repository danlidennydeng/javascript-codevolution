let a = 10; //Global Scope
function outer() {
  let b = 20; //function scope
  function inner() {
    let c = 30; //block scope
    console.log(a, b, c);
  }
  inner();
}
outer();

// starts from inner function to find each one of the variables from each scope.
