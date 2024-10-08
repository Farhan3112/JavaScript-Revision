// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
// https://regexr.com/
// https://regex101.com/

document.getElementById("phoneNum").addEventListener("input", (event) => {
    const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
    const input = document.getElementById("phoneNum");
    const format = document.querySelector(".phoneFormat");
    const phone = input.value;
    const found = regex.test(phone);
    if (!found && phone.length) {
      input.classList.add("invalid");
      format.classList.add("block");
    } else {
      input.classList.remove("invalid");
      format.classList.remove("block");
    }
  });
  
  document.getElementById("phoneForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("phoneNum");
    const regex = /[()-. ]/g;
    const savedPhoneNum = input.value.replaceAll(regex, "");
    console.log(savedPhoneNum);
  });

  //For text input
  document.getElementById("textForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById("textEntry");
    const regex = / {2,}/g;
    const newText = input.value.replaceAll(regex, " ").trim();
    console.log(newText);
    //example:- possible sending a city name to weather API, when we do that we would build a URL to sumbit because they would have an endpoint that we would need to send this data to. So we probably be building a URL inside of our code.  
    const encodedInputText = encodeURI(input.value);
    const encodedCleanText = encodeURI(newText)
    console.log(encodedInputText);
    console.log(encodedCleanText);
  });