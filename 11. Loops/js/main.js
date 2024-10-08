// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// LOOPS
//While Loop
console.log("While Loop");
let myNumber1 = 0;
while(myNumber1 < 50){
  // myNumber++; post increement, if we increement it just after the condition it will print from 1 to 50 even loop starts from 0 and end at < 50
  myNumber1 += 2;
  console.log(myNumber1);
  // myNumber = myNumber + 1;
}
//dont create endless loop


//Do While Loop -> we execute the loop atleast once
console.log("Do While loop");
myNumber2 = 50;
do {
  console.log(myNumber2);
}while(myNumber2 < 50)


//For Loop
console.log("For Loop");
// let i = 0; can also define i here
for(let i = 1; i <= 10 ; i++){
  console.log(i);
  //i++; can increement here also
}


console.log("Foor Loop");
let name1 = "dave";
for(let i=0;i<name1.length;i++){
  console.log(name1.charAt(i));
}


console.log("While Loop");
let name2 = "Dave";
let counter = 0;
let myLetter;
while(counter <= 3){
  myLetter = name2[counter];
  console.log(myLetter);
  if(counter === 1){
    counter += 2;
    continue; //skip this iterate
  }
  if(myLetter === "v") break;
  counter++;
}
console.log(counter);