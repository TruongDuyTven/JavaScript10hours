// ! NOT logical operator
// tyically used to reverse a condition's boolean value
// true -> false, false -> true

let temp = 15;
let sunny = true;

if (!(temp > 0 )) { // input 15 ouput "cold" input -15 ouput "warm"
    console.log("It's warm outside");
} else {
    console.log("It's cold inside");
}

if(!sunny) { // true -> false
    console.log("It's cloudy outside");
} else {
    console.log("It's sunny outside");
}