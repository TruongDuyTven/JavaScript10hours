let count = 0;

document.getElementById("decreaseButton").onclick = function() { //onclick is used click button
    count -= 1; 
    document.getElementById("countLabel").innerHTML = count;  //print new value for label
}

document.getElementById("resetButton").onclick = function() {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseButton").onclick = function() {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}