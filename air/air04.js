// return the oddOneOut, if it there is none oddOne = 'not found'
function oddOneOut(str) {
    let oddOne = '';
    let find = false;
    for (let i = 0; i < str.length && !find; i++) {
        if (isUnique(str, str[i], i)) {
            oddOne = str[i];
            find = true;
        }
    }
    if(oddOne === '') {
        oddOne = "not found";
    }
    return oddOne;
}

// check if the element is unique in the string
function isUnique(str, element, index) {
    let unique = true;
    for (let i = 0; i < str.length && unique; i++) {
        if(str[i] === element && index !== i) {
            unique = false;
        }
    }
    return unique;
}

// check if the array of arguments is not empty
function checkError(str) {
    let valid = true;
    if (str[0] === undefined) {
        valid = false;
    }
    return valid;
}

// parsing 
let args = process.argv.slice(2);

// assert
if(!checkError(args)) {
    console.error("error");
} else {
    let result = oddOneOut(args);
    console.log(result);
}