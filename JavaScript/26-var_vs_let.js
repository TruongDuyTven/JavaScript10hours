// variable scope = where the variable is accessible

// let = variable are limited to block scope{}
// var = variable are limited to a function() {}

//global variable = is declared outside any funtion
// (if global, var will CHANGE browser's window properties)


// when we use let, out the loop can't get value of i
// when we use var, out the loop can get value of i
// for (var i = 1; i <= 3; i += 1) {
//     console.log(i);
// }

// console.log(i);

function doSomething() {
    for (var i = 1; i <= 3; i += 1) {
        console.log(i);
    }
}
//in case, out the loop can't get value of i because var is limited
console.log(i);