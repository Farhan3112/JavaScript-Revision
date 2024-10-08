// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
// https://www.json.org/json-en.html


//JSON: Javascript Object Notation
/*
JSON is used to send and recieve Data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send & rcieve data in many languages
...not just in javascript
*/

const myobj = {
    name: "Dave",
    hobbies: ["eat", "sleep", "code"],
    hello : function(){
        console.log("hello!");
    }
};
console.log(myobj);
console.log(myobj.name);
myobj.hello();
console.log(typeof myobj);

const sendJSON = JSON.stringify(myobj);
console.log(sendJSON); //object becomes a string
console.log(typeof sendJSON); //string
console.log(sendJSON.name); //cant access property beacsue it is string now

//lets say we recieve JSON form server
const recieveJSON = JSON.parse(sendJSON);
console.log(recieveJSON); //it is now object again, but it doesnt ahve the method ecause we lost it when we converted it in string
console.log(typeof recieveJSON);
