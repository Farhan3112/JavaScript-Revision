//EXAMPLE

//Using POST ->this will post something instead of requesting data, we're requesting to send new data to the API that can be recorded, the API will send us a confirmation back.
const jokeObj = {
    "id": "wcxPRu41wc",
    "joke": "Why do bees have sticky hair? Because they use honey combs!",
};
const postData = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" //what content type we are sending, its json here
        },
        body: JSON.stringify(jokeObj) //what we are sending
    });
    const jsonResponse = await response.json();
    //console.log(jsonResponse);
    console.log(jsonResponse.headers);

}
postData(jokeObj);