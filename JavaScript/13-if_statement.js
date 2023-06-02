// if statement = a basic form of decision making
//               if a condition is true, then do something
//               if a condition is false, then don't do it!

let age = 21;

if(age >= 18) {
    console.log("You are an adult!");
} else if(age < 0) {
    console.log("You haven't been born yet!");
} 
else {
    console.log("You are an child!");
}
//if age >=18, print "You are an adult!"
// if age < 18 but age < 0 then print "You haven't been born yet!"
//if a < 18 and age >= 0, print "You are an child!"

let online = true;

if(online) {
    console.log("you are online!");
} else {
    console.log("you are not online!");
}

//you can check conditions by boolean values