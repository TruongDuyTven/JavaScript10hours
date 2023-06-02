//EASY way with window prompt

let usernames = window.prompt("what's your name?");
console.log(usernames);

//DIFFERENT with HTML textbox

document.getElementById("myButton").onclick = function() { //when the user clicks on button
    usernames = document.getElementById("myText").value; //get the value of input tag
    console.log(usernames);
    document.getElementById("myLabel").innerHTML = "Hello " + usernames; // show new String in label
} 