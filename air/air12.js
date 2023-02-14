// build a pyramide in 2d array the number of array is equal to the floor
function pyramide(charact, floor) {
    let retPyramide = [];
    let nbFloor = parseInt(floor);
    let nbCharact = 1;
    let nbSpace = nbFloor - 1; 
    let j, k;
    for(let i = 0; i < nbFloor; i++) {
        retPyramide[i] = [];
        for(j = 0; j < nbSpace; j++) {
            retPyramide[i][j] = ' ';
        }
        nbSpace--;
        for(k = 0; k < nbCharact; k++) {
            retPyramide[i][j] = charact;
            j++;
        }
        retPyramide[i][j] = "\n";
        nbCharact += 2;
    }
    return retPyramide;
}

// display the array on 
function displayArr(arr2d) {
    for(let i = 0; i < arr2d.length; i++) {
        for(let j = 0; j < arr2d[i].length; j++) {
            process.stdout.write(arr2d[i][j]);
        }
    }
}

// check if the array of argument contains 2 arguements and if the second is a number
function checkError(arrArgs) {
    let valid = true;
    if(arrArgs[1] === undefined || arrArgs[2] !== undefined || isNaN[arrArgs[1]] || arrArgs[0].length !== 1) {
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
    let result = pyramide(args[0], args[1]);
    displayArr(result);
}