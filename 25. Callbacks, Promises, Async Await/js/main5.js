//EXAMPLE

//2nd paramter of Fetch is an object

const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json" 
            //Accept: "text/plain" //not json
        }

    });
    //const jsonJokeData = await response.json();
    //console.log(jsonJokeData);
    //console.log(jsonJokeData.joke);

    //const textJokeData = await response.text(); //deliever data that is not json
    //console.log(textJokeData);

    const jsonJokeData = await response.json();
    console.log(jsonJokeData);

}
getDadJoke();
