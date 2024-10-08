// https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
// https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing


// USER INPUT
// alert("Hello World!")

// confirm("ok === True\nCancel === False")

// let myBoolean = confirm("ok === True\nCancel === False")
// console.log(myBoolean);

let name = prompt("Please enter your name.");
//when we click cancel this message will show
if(name){
    // console.log(name ?? "You didn't enter your name");
    console.log(name.length);
    // to remove white spacesdave
    console.log(name.trim().length);
    console.log(name.trim());
} else {
    console.log("You didn't enter your name.");
}