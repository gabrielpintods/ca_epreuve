function checkError(args) {
    let valid = true;
    if(args[1] === undefined || args[2] !== undefined) {
        valid = false;
    }
    return valid;
}

// parsing 
let arg = process.argv.slice(2);

// assert 
if(!checkError(arg)) {
    console.error("error");
}