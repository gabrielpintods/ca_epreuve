// shifts to the left the elements of the array
function leftRotation (arrArgs) {
    let leftArray = [];
    for(let i = 1; i < arrArgs.length; i++) {
        leftArray[i - 1] = arrArgs[i]; 
        if(i === arrArgs.length - 1) {
            leftArray[i] = arrArgs[0];
        }
    }
    return leftArray;
}

// check if the array of arguement contain at least two arguments
function checkError(arrArgs) {
    let valid = true
    if (args[1] === undefined) {
        valid = false;
    }
    return valid;
}

// display the result array on a single line
function displayArr (arrResult) {
    for(let i = 0; i < arrResult.length; i++) {
        if(i === arrResult.length - 1) {
            process.stdout.write(arrResult[i]);
        } else {
            process.stdout.write(arrResult[i] + ", ");
        }
    }
    console.log();
}

// parsing 
let args = process.argv.slice(2);

// assert
if(!checkError(args)) {
    console.error("error");
} else {
    let result = leftRotation(args);
    displayArr(result);
}
