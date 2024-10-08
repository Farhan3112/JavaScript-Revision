// Write code that will return a random letter from your name

// console.log(typeof "Dave");
//chatAt() ->returns single character
// console.log("dave".charAt());
//generate random number
// console.log(Math.floor(Math.random()*4+1));

//return 0 to 3 to make our code work, "Dave"
// console.log("Dave".charAt(Math.floor(Math.random()*4)));
// console.log("Dave".charAt(Math.floor(Math.random()*4)));
// console.log("Dave".charAt(Math.floor(Math.random()*4)));
// console.log("Dave".charAt(Math.floor(Math.random()*4)));

//lets make this work for ALL names
const anyName = "Jonathan"
//not every name has 4 characters so need to change it
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));