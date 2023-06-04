//nested loop = a loop inside of another loop

let rows = window.prompt("Enter # of rows");
let colums = window.prompt("Enter # of columns");
 
for(let i = 1; i <= rows; i+=1) {
    for(let j = 1; j <= colums; j+=1)  { // case loop inside loop call nested loop
        document.getElementById("myLabel").innerHTML += j;
    }
    document.getElementById("myLabel").innerHTML += "<br>"
}