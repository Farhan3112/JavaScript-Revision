// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

//MODULES -> Theya re sued to export different sections of code from one file to another and, after that code is exported, you import it into another file, these sections are usually functions or classes.
//type="module" -> in html scrip tag, it automatically implies the defer(load the DOM and then load the javascript) keyword, immediatly implies strict mode to javascript


//import playguitar from "./guitars.js"; //for default export
//import { shredding, plucking } from "./guitars.js";
//import { shredding as shred, plucking as fingerpicking } from "./guitars.js"; //can change name of the function
//console.log(playguitar());
//console.log(shredding());
//console.log(plucking());
//console.log(shred());
//console.log(fingerpicking());

import * as Guitars from "./guitars.js"; //trating like a class
//console.log(Guitars.default()); //if we have a default function we're exporting, we would have to name default to call that default function
console.log(Guitars.playguitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());


//For classes
import User from "./user.js";
const me = new User("email@email.com", "Dave");
console.log(me);
console.log(me.greeting());