// return = return a value back to the place where tou invoked the function

let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height); // that mean area = result;

console.log(area);

function getArea(width, height) {
    // let result = width * height;
    // return result;  //return value for function
    return width * height;  // you can write shorter
}