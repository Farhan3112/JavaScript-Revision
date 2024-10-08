// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

// CONDITIONALS: IF STATEMENTS
// let customerIsBanned = false;
// let soup = "chicken noodle soup";
// let crackers = true;
// let reply;
// if(customerIsBanned){
//     reply = "No soup for you"
// }
// else if(soup && crackers){
//     reply = `here's your order of ${soup} & crackers.`;
// }
// else if(soup){
//     reply = `here's your order of ${soup}`;
// } else {
//     reply = "Sorry, we're out of soup.";
// }
// console.log(reply);


// let testScore = 59;
// let collegeStudent = true;
// let grade;

// if(testScore >= 90){
//     grade = "A";
// }else if(testScore >= 80){
//     grade ="B";
// }else if(testScore >= 70){
//     grade ="C";
// }
// else if(testScore >= 60){
//     grade ="D";
// } else{
//     if(collegeStudent){
//         grade = "U";
//     }else{
//         grade = "F";
//     }
// }
// console.log(grade);


// Decisiomn Tree!
if(playerOne === computer){
    // tie game!
} else if(playerOne === "rock"){
    if(computer === "paper"){
        //computer wins
    }else{
        //playerOne wins
    }
}else if(playerOne === "paper"){
    if(computer === "scissors"){
        //computer wins
    }else{
        //playerOne wins
    }
} else{
    if(computer === "rock"){
        //computer wins
    }else{
        //playerOne wins
    }
}