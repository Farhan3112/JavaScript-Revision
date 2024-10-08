// https://developer.mozilla.org/en-US/docs/Glossary/Scope
// https://developer.mozilla.org/en-US/docs/Glossary/Global_scope
// https://developer.mozilla.org/en-US/docs/Glossary/Local_scope

//var, let, and const
//var -> we usually dont use var beacsue it allows us to redefine/redeclare the value of the same variable
// var x = 1;
// var x = 2;
// console.log(x);

//let -> let can be updated but not re-declared
// let x = 1;
// x = 2;
// console.log(x);

//const -> use const whenever you can, const cannot be updated or re-declared
// const x = 1;
// x = 2;
// console.log(x);

//GLOBAL SCOPE -> all three of these all global scope
// var x = 1;
// let y = 2;
// const z = 3;
//console.log(y);

//LOCAL SCOPE -> block scope and function scope
//block scope -> {}, if statement , loops, switch
// {
//   let y = 4;
//   console.log(y);
// }

//function scope
// function myFunc(){
//   const z = 5;
//   console.log(z);
// }
// myFunc();

//function scope
// function myFunc(){
//   const z = 5;
//   console.log(y);

//   //block scope
//   {
//   const y = 4;
//   console.log(y);
//   }
// }
// myFunc();

//EXAMPLE :-

//global scope
var x = 1; // function scope
let y = 2; // block scope
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
  var x = 10;
  const z = 5;

  {
    var x = 11; // function scoped
    const z = 6; // block scope
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
  //instead of 10 2 5, we get 11 2 5 beacuse of var
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);
}
myFunc();


// Global = Not a function or block. Not desirable.
// local = In a fucntion or block . Not global.
// var instances function() scoped variables.
// let and const instantiate {block} coped variables.

// TIPS:
// Avoid using var. Stick with const and let.
// Use const unless you need to reassign value.
// Use let if you know you will reassign value.