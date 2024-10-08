// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods


// STRINGS
const myVarible = "Mathematics";

// The length property
// console.log("myVarible".length);
// console.log("Every good boy does fine".length);

// STRING METHODS
// console.log(myVarible.charAt(0));
//gives index of first occurence
// console.log(myVarible.indexOf("ati"));
//gives index of last occurence
// console.log(myVarible.lastIndexOf("ath"));
//accepts starting and ending position as parameters and returns characters from start to ending position(not include ending position), if ending not provided it will return till the end of the string
// console.log(myVarible.slice(5, 6));
// console.log(myVarible.toUpperCase());
// console.log(myVarible.toLowerCase());
//returns boolean data
// console.log(myVarible.includes("mat"));
//splits the string wherever the character we provide and returns the resulting multiple strings within an array
// console.log(myVarible.split("e"));
//returns every character as a seperate string within the resulting array
// console.log(myVarible.split(""));
// console.log("John,Joe,Dave".split(","));
console.log("Every good boy does fine".split(""));