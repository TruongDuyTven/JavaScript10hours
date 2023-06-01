//let x = Math.random(); random real number form 0 to 1. ex: 0.48194......
//let x = Math.floor(Math.random() * 6); random integer number form 0 to 5.
//console.log(x);

let x;

document.getElementById("rollButton").onclick = function () {
    //like tossing the dice
    //program print random integer form 1 to 6
    x = Math.floor(Math.random() * 6) + 1;
    document.getElementById("xlabel").innerHTML = x;
}