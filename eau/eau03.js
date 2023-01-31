function reverse(args) {
    for (let i = args.length - 1; i > -1; i--) {
        console.log(args[i]);
    }
}

function checkError(args) {
    if (args[0] === undefined) {
        return true;
    } else {
        return false;
    }
}

// parsing 
let args = process.argv.slice(2);

// affichage
if(checkError(args)) {
    console.error("error");
} else {
    reverse(args);
}