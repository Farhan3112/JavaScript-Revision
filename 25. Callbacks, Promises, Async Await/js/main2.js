//Pending state of promise using fetch API
//Fetch API returns a promise

//const users = fetch("https://jsonplaceholder.typicode.com/users");
//pending state
//console.log(users);

const users = fetch("https://jsonplaceholder.typicode.com/users")
 .then(response => {
    //console.log(response);
    return response.json()
 })
.then(data => { //json data
    //console.log(data);
    data.forEach(user => { //we pulled data right out of the JOSN, instead of return 10 users data at once
        console.log(user);
    });
});

//console.log(users);//this code does not wait for the above code