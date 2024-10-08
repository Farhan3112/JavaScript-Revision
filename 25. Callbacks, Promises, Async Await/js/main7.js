//pass data in through URL to send data, here we want to insert first name and the last name instead of the Chuck Norris (we are using Interet Chuck Norris database and its full of Chuck Norris jokes)
// Define an async function to fetch and modify the joke
const requestJoke = async (firstName, lastName) => {
  const response = await fetch(
    `https://api.chucknorris.io/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo[nerdy]`
  );
  const jsonResponse = await response.json();
  console.log(jsonResponse.value.joke);
};

requestJoke("Bruce", "Lee");
