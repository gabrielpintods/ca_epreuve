// cross the array of arguments from the top to the bottom
function reverse(args) {
    for (let i = args.length - 1; i > -1; i--) {
        console.log(args[i]);
    }
}

// check if the array of arguments is not empty
function checkError(args) {
    if (args[0] === undefined) {
        return true;
    } else {
        return false;
    }
}

// parsing 
let args = process.argv.slice(2);

// display
if(checkError(args)) {
    console.error("error");
} else {
    reverse(args);
}