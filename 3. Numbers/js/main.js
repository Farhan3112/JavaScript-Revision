// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math


// NUMBERS

// An integer is a whle number.
const myNumber = 42;
// console.log(myNumber);

// A number with a decimal point is a float which references the "floating point"
const myFloat = 42.0151;
// console.log(myFloat);

const myString = "42.123abc";
// console.log(myString);

// console.log(myNumber === myFloat);
// console.log(myNumber === myString);

// console.log(myString + 3);
//change string datatype to number datatype
// console.log(Number(myString) + 3);
// console.log(Number(myString) === myNumber);
// console.log(Number("Dave")); //returns NaN(not a number)
// console.log(Number(undefined)); //->NaN
// console.log(Number(true)); //return 1
// console.log(Number(false)); //return 0


// NUMBER METHODS
//The Number.isInteger() method determine whether the passed value is a integer, returns true or false
// console.log(Number.isInteger(myString));

//The Number.parseFloat() method parses an argument and returns a floating point number . If a number cannot be parsed from the argument, it returns NaN
// console.log(Number.parseFloat(myString));

//The toFixed() method formates a number according to how many decimal points you provide as the parameter, returns as string
// console.log(Number.parseFloat(myString).toFixed(2));
// console.log(myFloat.toFixed(2));

//The Number.parseInt() method parses a string argument and returns an integer
// console.log(Number.parseInt(myString));

//The toString() method returns a string representing the number.
// console.log(myFloat.toString());
// console.log(typeof myFloat.toString());
// console.log(typeof Number.parseFloat(myString));

//Chaining = Using several methods chained together
// console.log(Number.parseFloat("4.236abc").toFixed(2));


//NaN is an acronym for Not a Number
//The Number.isNaN() method determines whether the pased value is NaN AND its type is Number
// console.log(Number.isNaN("Dave"));

//The global isNaN() funtion determines whether a value is naN pr not
console.log(isNaN("Dave"));