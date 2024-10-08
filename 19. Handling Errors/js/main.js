// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch


// JAVASCRIPT ERRORS AND ERROR HANDLING
"use strict";
//variable = "dave"; //ReferenceError
//console.log(variable);

//const name = "Dave";
//name = "Joe"; //TypeError

const makeError = () =>{
    //try the code
    try{
        // const name = "Dave";
        // name = "Joe";

        // throw new customError("This is a custum error!");

        throw new Error("This is a error!");
    } 
    //we will pass an error if an error occurs as the parameter
    //err -> error
    catch(err) {
        //console.log(err);
        //console.error(err);
        //console.warn(err);
        // console.error(err.name);
        // console.error(err.message);
        console.error(err.stack);
        //so you can record and look at the logs later on
        //logTheError(err.stack);

        console.error(err.name);
        console.error(err.message);
    } 
    //finally block will still execute even if the error is thrown or not
    finally {
        console.log(("...fianally"));
    }
}
makeError();

//custom error
// function customError(message){
//     this.message = message;
//     this.name = "customError";
//     this.stack = `${this.name}: ${this.message}`
// }