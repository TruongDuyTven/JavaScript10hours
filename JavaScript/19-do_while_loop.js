// do while loop = do something,
//                 then check the condition,
//                 repeat if condition is true

//different with while loop
// - do while loop: do something then check the condition
// - while loop: check the condition and do something

let userName;

do {
    userName = window.prompt("Enter your name");
} while (userName == "");

console.log("Hello " + userName);
