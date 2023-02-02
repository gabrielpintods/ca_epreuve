function checkIsNumber(str) {
    let isNumber = true;
    for(let i = 0; i < str.length && isNumber; i++) {
        if( !(/^\d+$/.test(str.charAt(i))) ) {
            isNumber = false;
        }
    }
    return isNumber
}

function checkError(args) {
    let ret = true;
    if (args[0] === undefined || args[1] !== undefined) {
        ret = false;
    }
    return ret;
}

// parsing 
let args = process.argv.slice(2);

if (!checkError(args)) {
    console.log("error");
} else {
    let result = checkIsNumber(args[0]);
    console.log(result);
}
