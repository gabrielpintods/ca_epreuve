// recurive function that calls ifself until n < 2
function fibonacci(n) {
    if (n < 2) {
        return n;
    } else {
        let ret = fibonacci(n - 1) + fibonacci(n - 2);
        return ret;
    }
}

// check if the array of arguments contain more than one element and if this element is < 0
function checkError(args) {
    if (args[0] < 0 || isNaN(args[0]) || args[0] === undefined || args[1] !== undefined ) {
        return true;
    } else {
        return false;
    }
}

// Parsing
let args = process.argv.slice(2);

// Display
if(checkError(args)) {
    console.log(-1);
} else {
    let tmp = fibonacci(args[0]);
    console.log(tmp);
}
