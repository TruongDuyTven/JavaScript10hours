let a;
let b;
let c;

/**
EASY WAY WITH PROMPT
    a = window.prompt("Enter side A");
    a = Number(a);

    b = window.prompt("Enter side B");
    b = Number(b);

    // c = Math.pow(a, 2) + Math.pow(b, 2);
    // c = Math.sqrt(c);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    console.log("Side C: ", c);
 */


/**
DIFFERENT WAY WITH HTML BOX
    document.getElementById("submitButton").onclick = function () {
    a = document.getElementById("aText").value;
    a = Number(a);

    b = document.getElementById("bText").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("clabel").innerHTML = "Side C: " + c;
}
 */

