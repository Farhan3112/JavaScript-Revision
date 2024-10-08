// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


// ARRAYS
// const myArray = [];

// add elements to an array
// myArray[0] = "Dave";
// myArray[1] = 1001;
// myArray[2] = false;

// refer to an array
// console.log(myArray);

// length property
// console.log(myArray.length);

// last element in an array
// console.log((myArray[myArray.length - 1]));

// console.log(myArray[1]);

// myArray.push("school"); ->add elements to the back
// console.log(myArray);

// const lastItem = myArray.pop(); ->remove elements to the back
// console.log(lastItem);

// const newLength = myArray.unshift(42); ->add elements to the front
// console.log(newLength);

// const firstItem = myArray.shift(); ->remove elements to the front
// console.log(firstItem);
// console.log(myArray);
// console.log(myArray[1]);
// console.log(myArray[2]); ->undefined

// delete myArray[1]; ->to delete element in the middle (not recommended, leaves undefined data)
// console.log(myArray);

//splice can be used to delete adn repalce
// myArray.splice(1, 1)
// myArray.splice(1, 1, 42)
// myArray.splice(1, 0, 42)
// console.log(myArray);
// console.log(myArray[1]);


const myArray = ['A','B','C','D','E','F'];

// const newArray = myArray.slice(2,5);
// console.log(newArray);

// myArray.reverse();
// console.log(myArray);

// const newString = myArray.join(); ->make a string of all the elements of an array
// console.log(newString);

//string method
// const newString = myArray.join(); ->convert array into string
// const newArray = newString.split(",") ->split the commas
// console.log(newArray); ->return a new array without commas

//joints  2 existing arrays
// const myArrayA = ['A','B','C'];
// const myArrayB = ['D','E','F'];
// const newArray = myArrayA.concat(myArrayB);
// const newArray = myArrayB.concat(myArrayA);
//another way of doing this to use spread operator
// const newArray = [...myArrayA, ...myArrayB];
//const newArray = [myArrayA, myArrayB]; ->creates 2 nested arrays
//console.log(newArray);


//ARRAYS

const equipShelfA = ["baseball", "football", "vollyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
//or
console.log(clothesShelfB[0]);

//2D array
const equibDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

// console.log(equibDept);
// console.log(clothesDept);

console.log(equibDept[0][1]);
console.log(clothesDept[1][0]);

//3D array
const sportsStore = [equibDept, clothesDept];
console.log(sportsStore[0][1][1]);
console.log(sportsStore[1][1][0]);