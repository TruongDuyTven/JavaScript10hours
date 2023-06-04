//function = Define code once, and use it many times.
//           To perform some code, call the function name.

startProgram();

function startProgram() {
    let userName = "User";
    let age = 21;
    happyBirthDay(userName, age); // when I call this function, it will print 5 below sentences
}
//function allow user input variables to function
function happyBirthDay(a, b) {
console.log("Happy Birthday to you!");
console.log("Happy Birthday to you!");
console.log("Happy Birthday dear", a);
console.log("Happy Birthday to you!");
console.log("You are", b , "years old");
}
// Instead of having to copy the code to many places
// and fill it with different information, we can create 
// many functions to reuse them.