//Give us the ability to check more than 1 condition concurrently
// && AND (BOTH condition must be true)
// || OR (Either condition must be true)

let temp = 15;
let sunny = true;

if(temp > 0 && temp < 30) { //two comparison must be true
    console.log("The weather is good");
} else {
    console.log("The weather is bad");
}

if(temp > 0 || temp < 30) { //one of two comparison must be true. two comparison can be true
    console.log("The weather is good");
} else {
    console.log("The weather is bad");
}

//same with more than 2 conditions

if(temp > 0 && temp < 30 && sunny) { //three comparison must be true
    console.log("The weather is good");
} else {
    console.log("The weather is bad");
}

if(temp > 0 || temp < 30 || sunny) { //one of three comparison must be true. two comparison or all comparison can be true
    console.log("The weather is good");
} else {
    console.log("The weather is bad");
}