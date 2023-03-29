let x=5.5

if(typeof x == 'number' && !isNaN(x)){
    
    // check if it is integer
    if (Number.isInteger(x)) {
        console.log(`${x} is integer.`);
    }
    else {
        console.log(`${x} is a float value.`);
    }

} else {
    console.log(`${x} is not a number`);
}