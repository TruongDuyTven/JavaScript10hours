//Switch = statement that examine a value for a match against many case clauses.
//         More efficient that many "else if" statements

//Instead of you having to use many if functions to compare, we can use switch instead

let grade = "A";

switch (grade) {
    case "A": 
        console.log("You did great");
        break;
    case "B": 
        console.log("You did good");
    case "C": 
        console.log("You did okay");
        break;
    case "D": 
        console.log("You passed....barely");
        break;
    case "F": 
        console.log("You FAILED");
        break;
    default: 
        console.log(grade, "is not a letter grade");        
}

//run the switch statement match with all case, if anything matched, return default