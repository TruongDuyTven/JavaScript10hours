//EASY way with window prompt

let usernames = window.prompt("what's your name?");
console.log(usernames);

//DIFFERENT with HTML textbox

document.getElementById("myButton").onclick = function() {
    usernames = document.getElementById("myText").value;
    console.log(usernames);
    document.getElementById("myLabel").innerHTML = "Hello " + usernames;
} 