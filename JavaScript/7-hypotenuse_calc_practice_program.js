let a;
let b;
let c;

//you can delete "/**" and "*/" to demo code

/**
EASY WAY WITH PROMPT
    a = window.prompt("Enter side A");
    a = Number(a);

    b = window.prompt("Enter side B");
    b = Number(b);

    // c = Math.pow(a, 2) + Math.pow(b, 2);
    // c = Math.sqrt(c);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));   c^2 = a^2 + b^2;

    console.log("Side C: ", c);
 */


/**
DIFFERENT WAY WITH HTML BOX
    document.getElementById("submitButton").onclick = function () { //user clicked on button
    a = document.getElementById("aText").value; //get the value on input box
    a = Number(a);

    b = document.getElementById("bText").value; //get the value on input box
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("clabel").innerHTML = "Side C: " + c;
}
 */

