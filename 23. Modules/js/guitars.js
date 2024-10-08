// const playguitar = () =>{
//     return "Playing guiter!";
// }
// const shredding = () =>{
//     return "Shredding licks!"
// }
// const plucking = () =>{
//     return "Plucking the strings...";
// }
//export default playguitar;
//export {shredding, plucking}

//or Exporting using inline
/* export default function playguitar() { //default export for this file
    return "Playing guiter!";
} */
export function playguitar() { //if we dont want to put default
    return "Playing guiter!";
}
export const shredding = () => {
    return "Shredding licks!"
}
export const plucking = () =>{
    return "Plucking the strings...";
}