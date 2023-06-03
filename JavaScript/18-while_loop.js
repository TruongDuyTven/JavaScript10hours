// while loop = repeat some code 
//              while some condition is true
//              potentially infinite

let userName = "";

while(userName == "" || userName == null) { // the prompt will repeat infinitely if you don't enter character
    userName = window.prompt("Enter your name");
}
// the loop will break if condition is false
console.log("Hello " + userName);

// ----------------------------------------------------------------

while(1 == 1) { //if condition is true command below will run infinite loop
    console.log("HELP");
}