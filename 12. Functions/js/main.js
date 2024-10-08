// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// FUNCTIONS -> provide reusable code!

// Methods = Built-in Functions!
//"Dave".toLowerCase(); -> we are calling a function but its called method beacuse its already built in javascript

//Function Declaration Syntax:
function sum(num1, num2) {
  console.log(num1);
  console.log(num2);
  if(num2 === undefined){
    return num1 + num1;
  }
  return num1 + num2;
}
console.log(sum(5,10));

function getUserNameFromEmail1(email){
  //slice -> start at 0 till @ (excluding @)
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail1("user@GitHub.com"));

//Anonymous Function -> if we dont povide a name
const getUserNameFromEmail2 = function (email){
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail2("Dave@davedomain.com"));

//Arrow Function
const getUserNameFromEmail3 = (email) => {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail3("john@davedomain.com"));


const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("september"));