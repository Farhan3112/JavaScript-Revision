// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
// https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage


//WEB STORAGE API
//Not a part of the DOM - refers to the window API
//AVAILABLE to JS via the global variable: window
//We do not have to type window. It is implied:

//window.alert("ok"); -> same as alert
//alert("ok!");

//window.alert(window.location); //returns url of the website
//alert(location);

const myArray = ['eat','sleep','code'];
const myObject = {
    name: "Dave",
    hobbies: ['eat','sleep','code'],
    logName: function(){
        console.log(this.name);
    }
}
//myObject.logName();
//1) session storage -> it only keeps the data during the sessionand that is while we are on the website or possibly logged into a website, and once we close out of the browser and close our session that data is no longer stored.
//sessionStorage.setItem("mySessionStore", myObject)
//sessionStorage.setItem("mySessionStore", myArray)
//const mySessionData = sessionStorage.getItem("mySessionStore");
//console.log(mySessionData);
//console.log(typeof mySessionData);//they only store string data, like JSON, if not they convert it to string data.

//we store the data as string, but then we can retrive it and can turn back into array or object that we need to to be . It does not keep the methods in object beacuse JSON convert it to string first.

//sessionStorage.setItem("mySessionStore", JSON.stringify(myObject));
//const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore")); //to get object not string
//console.log(mySessionData);
sessionStorage.setItem("mySessionStore", JSON.stringify(myArray));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore")); //to get array not string
console.log(mySessionData);

//2) local storage -> will store persistant data and it will continue to store that data in the browser, but not attached to the open tab or even the open browser. So we can reopen our browser, go back to the same website and retrive that data.that would be persistant data. EX.(to-do list, high score ingame)
localStorage.setItem("myLocaStore", JSON.stringify(myArray));
//localStorage.removeItem("myLocaStore");// if the data doest not exist(key doest exist which the key was the name) and we attempt to get it, it will return null
//localStorage.clear();// to clear out all the local storage
const storeLength = localStorage.length; //to get total no. of keys in storage
//const key = localStorage.key(0); //return the name of the key, input->its index
const myLocalData = JSON.parse(localStorage.getItem("myLocaStore"));
console.log(myLocalData);
//console.log(key);
console.log(storeLength);