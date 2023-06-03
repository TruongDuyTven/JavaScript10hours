// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

for(let i = 0; i <= 20; i += 1) {
    if(i == 13) { //that mean while i = 13 then break out the loop. out will print number from 0 to 12
        break;
    }
    console.log(i);
}

//----------------------------------------------------------------

for(let i = 0; i <= 20; i += 1) {
    if(i == 13) { //that mean while i = 13 then skip commands below. that means when run continue, program will skip console.log(i);
        continue;
    }
    console.log(i);
}