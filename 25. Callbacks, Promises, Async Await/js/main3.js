// Async / Await -> another way of teling your wiat for this to happen before i do this, but it lets write the code in a much cleaner manner, and how we're used to writing code without chaining these thenables
const myUsers = {
    userList: []
}

const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); //wait to get these results from the fetch that requests from the JSON placeholder API before doing what comes next
    const jsonUserData = await response.json();
    return jsonUserData;
}

const anotherFunc = async ()=>{
    const data = await myCoolFunction();
    //console.log(data);
    myUsers.userList = data;
    console.log(myUsers.userList);
}
anotherFunc();
console.log(myUsers.userList);//it is not waiting for the data from fetch, so we need to put this in the same function.