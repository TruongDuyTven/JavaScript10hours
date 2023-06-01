// slice() extracts a section of a string
//         and returns it as a new string,
//         without modifying the original string.

let fullName = "user name"
let firstName;
let lastName;

lastName = fullName.slice(5); // split the name from 5th character to end. output: "name"
firstName = fullName.slice(0, 4); // split the name from begin string to 4th character. output: "user"

lastName = fullName.slice(fullName.indexOf(" ") + 1) // split the name from location + 1. to end. output: "name"
firstName = fullName.slice(0, fullName.indexOf(" ") + 1); // split the form begin to location + 1. output: "user"

console.log(firstName);
console.log(lastName);