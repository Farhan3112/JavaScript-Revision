//EXAMPLE

//workflow function

const getAlluserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
   
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });

    //console.log(userEmailArray);
    //return userEmailArray //not working because we all loging it outside the func
    postToWebPage(userEmailArray);
}
//console.log(getAlluserEmails());//pending promise, because it is not within the function
//getAlluserEmails();

const postToWebPage = (data) =>{//already waited for this data to be arrived
    console.log(data);
}
getAlluserEmails();