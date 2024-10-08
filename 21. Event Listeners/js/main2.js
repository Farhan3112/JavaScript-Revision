//FOR #VIEW3
document.addEventListener("readystatechange", (event)=>{
    if(event.target.readyState === "complete"){//page is loaded enough that the dom is loaded
        console.log("readyState: complete");
        initApp();//execute event listeners, start interact with dom because you would know your page is ready
    }
});

const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm= view3.querySelector("#myForm")
    myForm.addEventListener("submit", (event)=>{
        event.preventDefault();//prevent relaod the page after submitting
        console.log("submit event");;
    });
};

