// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

//1) KEY-VALUE PAIRS IN CURLY BRACES
//const myObj = {name: "Dave"};
// console.log(myObj);
// console.log(myObj.name);

//const anotherObj = {
//    alive: true,
//    answer: 42,
//    hobbies: ["Eat", "Sleep", "Code"],
//    beverage: {
//        morning: "Coffee",
//        afternoon: "Iced Tea"
//    },
    //method name is action, its valueis anonymous function
    // action: function() {
    //     return "Hello World!";
    // }
    //'this' refers to the object
//    action: function() {
//        return `Time for ${this.beverage.morning}`;
//    }
//}
// console.log(anotherObj.hobbies);
// console.log(anotherObj.hobbies[0]);
// console.log(anotherObj["alive"]);
// console.log(anotherObj["beverage"]);
// console.log(anotherObj.beverage.morning);
//console.log(anotherObj.action());



// const vehicle = {
//     wheels: 4,
//     engine: function(){
//         return "Vrrooom!";
//     }
// }
//we are using vehicle object as a contructor for our truck object (truck is inheriting the objects form vehicle)
//const truck = Object.create(vehicle);
//truck.doors = 2; //own property of truck
//console.log(truck);
//console.log(truck.wheels); //Inheritance
//console.log(truck.engine());

//const car = Object.create(vehicle);
//car.doors = 4;
//car.engine = function(){return "Whoooosh!"};
//console.log(car.engine()); //overwrote the inherite method
//console.log(car.wheels);

//const tesla = Object.create(car);
//console.log(tesla.wheels);
//console.log(tesla.engine());
//tesla.engine = function(){return "Shhhhh..."}
//console.log(tesla.engine());


//2)
const band = {
    vocals: "Robert Plant",
    guiter: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
}
// delete band.drums; // deletes property
// console.log(band.hasOwnProperty("drums")); //return true or false
// console.log(Object.keys(band));
// console.log(Object.values(band));
//loop that goes thorugh the objects ->For in loop
// for(let job in band){
    // console.log(band[job]);
    // console.log(`On ${job}, it's ${band[job]}!`);
// }

//destructuring onjects
//pulling value of key guiter out of the onject
// const {guiter: myVarible, bass: myBass} = band;
//console.log(myVarible);
//console.log(myBass);
//we are creating four new variables and we named those variables exact the same things they are referred to as in the object
// const {vocals, guiter, bass, drums } = band;
// console.log(guiter);
// console.log(vocals);

function sings({ vocals }) {
    return `${vocals} sings!`;
}
console.log(sings(band));