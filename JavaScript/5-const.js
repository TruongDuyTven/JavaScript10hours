// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter radius of the circle");
radius = Number(radius);

//PI = 420 is not working because const can't be changed

circumference = radius * PI * 2;
console.log("The circumference is ", circumference);