//EXAMPLE

//abstact into funcions
//maybe from form
const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObj
}

const buildRequestUrl = (requestData)=>{
    return `https://api.chucknorris.io/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

const requestJoke = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke)//function that display the jokes
}

const postJokeToPage =(joke) => {
    console.log(joke);
}

//Procedural "workflow" function
const processJokesRequest = async ()=>{ //called into asction by an event in the DOM
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished!");
}
processJokesRequest();