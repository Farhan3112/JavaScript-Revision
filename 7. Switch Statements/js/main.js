// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

// CONDITIONALS: SWITCH STATEMENTS

//syntax
// switch(Math.floor(Math.random()*5 + 1)){
//     case 1:
//     console.log(1);
//     break;

//     case 2:
//     console.log(2);
//     break;

//     case 3:
//     console.log(3);
//     break;

//     default:
//     console.log("No match");
// }


//Decission Tree!
let playerone = "scissors"
let computer = "rock"

switch(playerone){
    case computer:
    console.log("Tie game!")
    break;

    case "rock":
        if(computer === "paper"){
            console.log("computer wins!");
        }else{
            console.log("playerOne wins!");
        }
        break;

    case "paper":
        if(computer === "scissors"){
            console.log("computer wins!");
        }else{
            console.log("playerOne wins!");
        }
        break;

   default:
        if(computer === "rock"){
            console.log("computer wins!");
        }else{
            console.log("playerOne wins!");
        }  
}