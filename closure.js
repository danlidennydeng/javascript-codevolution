// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   inner();
// }
// outer();
// outer();

function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}
const fn = outer();
fn();
fn();
fn();

//closure

//A closure is the combination of a function bundled together with references to its surrounding state. Closure are created everytime a function is created, at function creation time. confused? see a better explaination below

//In javascript, when we return a function from another function, we are effectively returning a combination of the function definition along with the function's scope. This would let the function definition have an associated persistent memory which could hold on to live data between executions. That combination of the function and its scope chain is what is called a closure in Javascript.
