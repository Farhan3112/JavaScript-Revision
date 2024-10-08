// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then


//Fetch API requires a discussion of...
//Callback, promises, Thenables, and Async/Await

//CALLBACKS ->are just functions that are passed to others functions as parameters, so they will call that function after they finish doing their other stuff.
// function firstFunction(parameters, Callback){
//     //do stuff
//     Callback();
// }
//AKA "callback hell" ->promises is a way to get rid of this
// firstFunction(para, function(){
//     //do stuff
//     secondFunction(para, function(){
//         thirdFunction(para,function(){

//         });
//     });
// });

//PROMISES
//3 states of this: Pending, Fullfilled, Rejected
//promises will deliver aync code, JS is synchronous meaning doing one thing at a time, Promise could be pending while some other JS code goes ahead and executes. So we arae executing 2 different blocks of code at once.
const myPromise = new Promise((resolve, reject)=>{
    const error = false;
    //const error = true;
    if(!error){
        resolve("Yes! resolved the promises");
    } else {
        reject("No! rejected the promise.");
    }
});
// console.log(myPromise);
// //Thenables -> to give the value of the promise, beacuse promise usually gives the state of the promise
// myPromise.then(value => {//anonymous function
//     //console.log(value);
//     return value + 1;
// })
// .then(newValue =>{
//     console.log(newValue);
// })
// .catch(err => {//to catch the error(rejected) in promise, it will skip the thenables goes staright to the catch
//     console.error(err);
// })

//timeout ->that delays some execution of code
const myNextPromise = new Promise((resolve, reject)=>{
    setTimeout(function(){ //anonymous function
        resolve(".myNextPromise resolved!")
    }, 3000);//3sec delay before this codes execute
});
myNextPromise.then(value=>{
    console.log(value);
});
myPromise.then(value=>{
    console.log(value);
});