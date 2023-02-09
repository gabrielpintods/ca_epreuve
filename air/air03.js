// return a string of the element of the array(str) spaced of a separator
function concatStr(str) {
    let separator = str[str.length - 1];
    let strConcat = '';
    for (let i = 0; i < str.length - 1; i++) {
        strConcat = strConcat + str[i] + separator;
    }
    return strConcat;
}

// check if the array of arguments is not empty
function checkError(str) {
    let valid = true; 
    if(str[0] === undefined) {
        valid = false;
    }
    return valid;
}

// parsing
let args = process.argv.slice(2);

// assert 
if(!checkError(args)) {
    console.error(args);
} else {
    let result = concatStr(args);
    console.log(result);
}