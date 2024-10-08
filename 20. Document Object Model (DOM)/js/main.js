// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

// DOM - DOCUMENT OBJECT MODEL
//select element by id
const view1 = document.getElementById("view1");
console.log(view1);
//select element by query selector
const view2 = document.querySelector("#view2");
console.log(view2);

//changing the style to show and hide display
view1.style.display = "flex";
view2.style.display = "none";

//select element by class ->HTML Elements, have elements inside it
const views = document.getElementsByClassName("view");
console.log(views);
//select element by queryselectorAll(by CSS Selectors) ->Nodelist, have codes inside it, nodes are everything , are whitespaces,text inside of an element
const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);
//select element by tag names
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for( let i=0; i<evenDivs.length; i++){
    evenDivs[i].style.backgroundColor = "darkblue";
    // evenDivs[i].style.width = "200px";
    // evenDivs[i].style.height = "200px";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello World";
const navbar = document.querySelector("nav");
// To change the content of an HTML element
navbar.innerHTML = `<h1>Hello!</h1> <p>This should aligh right.`;
console.log(navbar);
navbar.style.justifyContent = "space-between";


//Navigating The Dom Tree
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children); //html elements
console.log(evenDivs[0].parentElement.childNodes); //elemnts, text nodes,whitespace nodes
console.log(evenDivs[0].parentElement.hasChildNodes()); //to check if it has child nodes with this method
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);


//Add and remove elements
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while(view2.lastChild){
    view2.lastChild.remove(); //we are removing all nodes nit just element
}

const createDivs = (parent, iter) =>{
    const newDiv = document.createElement("div");
    newDiv.textContent = iter; //so we can number each different square we create
    newDiv.style.backgroundColor = "#000";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
}
//createDivs(view2,10)
for(let i=1;i<=12;i++){
    createDivs(view2,i);
}