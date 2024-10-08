// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
// https://developer.mozilla.org/en-US/docs/Web/Events
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState

//JAVASCRIPT EVENT LISTENERS
// const view = document.querySelector("#view2");
//console.log(view);
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

// Syntax: addEventListener(event, function, useCapture)

// const doSomething = () =>{
//     alert("doing something");
// }
// h2.addEventListener("click", doSomething, false);//his false is default
// h2.removeEventListener("click", doSomething, false);//remove the EventListener, but we cant remove in anonymous function
 
// h2.addEventListener("click", function (event){//its an anonymous fucntion
    // console.log(event.target);//target is waht we clicked
    // event.target.textContent = "Clicked";
// });


document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState === "complete"){//page is loaded enough that the dom is loaded
        console.log("readyState: complete");
        initApp();//execute event listeners, start interact with dom because you would know your page is ready
    }
});

const initApp=()=>{
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        //event.stopPropagation();//works when useCapture is true and false, it stop propagation so it didnt propagate to the div, and then div to down h2
        //view.style.backgroundColor = "purple";
        //event.target.style.backgroundColor = "purple";
        //view.classList.add("purple"); //apply .purple class form css
        //view.classList.remove("darkblue"); //remove darkblue css from html
        view.classList.toggle("purple");
        view.classList.toggle("darkblue");
    }, false);

    div.addEventListener("click", (event) => {
        //div.style.backgroundColor = "blue";
        //event.target.style.backgroundColor = "blue";
        div.classList.toggle("blue");
        div.classList.toggle("black");
    }, false);

    h2.addEventListener("click", (event) => {
        const myText = event.target.textContent;
        myText === "My 2nd View" ? (event.target.textContent = "Clicked")
        : (event.target.textContent = "My 2nd View");
        //event.target.textContent = "Clicked";
    }, false);//true here-> starts from outermost and works its way inward

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
    });
    nav.addEventListener("mouseout", (event) =>{
        event.target.classList.remove("height100");
    })
};
