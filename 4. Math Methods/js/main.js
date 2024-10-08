// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// https://www.tutorialspoint.com/javascript/javascript_math_object.htm

//MATH METHODS AND PROPERTIES
// console.log(Math.PI)
//returns integer potion of a number and truncates any decimals
// console.log(Math.trunc(Math.PI));
//returns number rounded to the nearest integer, 3.4->3, 3.5->4
// console.log(Math.round(3.5));
//number will be always rounded no matter the decimal, ceil short for ceilling, it will round the value up
// console.log(Math.ceil(3.5));
//it will round the value down
// console.log(Math.floor(3.5));


//takes base number and the exponent as the parameter
// console.log(Math.pow(5, 2));
//returns the smallest numberfrom 0 or more numbers
// console.log(Math.min(2,0.5,9));
//returns the largest numberfrom 0 or more numbers
// console.log(Math.max(2,0.5,9.2));
//it provides pseudo random number from zero to one, range includes 0 but does not include the integer 1
// console.log(Math.random());

//random number generator from 1 to 10, if we dont add 1 we get number from 0 to 9, replace 10 with whatever max number we want
console.log(Math.floor(Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)


//Why choose Math.floor() NOT Math.ceil() for generating a random number from 1 to 10? -> Maths.random() returns a range from 0 to 1 that includes 0 but not 1, Math.ceil(Math.random()*10) has a chance of resulting in zero, Math.floor((Math.random()*10)+1) is the way to go.