// compare each element of the array to the number to compare and place it in order 
function sort(str) {
    let newNbr = parseInt(str[str.length - 1]);
    let newArrNbrs;
    let disturbeDone = false;
    let i = 0;
    while(!disturbeDone) {
        if (parseInt(str[i]) > newNbr) {
            newArrNbrs = disturbe(str, i, newNbr);
            disturbeDone = true;
        } else if (i >= str.length) {
            newArrNbrs = str;
            break
        }
        i++;
    }
    return newArrNbrs;
}

// return a sorted array with the new element at the index set to the correct place
function disturbe(str, index, newNbr) {
    let arrNbrs = [];
    let i;
    for(i = 0; i <= index; i++) {
        if(i === index) {
            arrNbrs[i] = newNbr.toString();
        } else {
            arrNbrs[i] = str[i];
        }
    }
    for(let j = index; j < str.length - 1; j++) {
        arrNbrs[i] = str[j];
        i++;
    }
    return arrNbrs;
}

// display the array one line, error if the array is undefined
function displayArr(arrNumber) {
    if(arrNumber[0] === undefined) {
        console.log("error"); 
    } else {
        for (let i = 0; i < arrNumber.length; i++) {
            process.stdout.write(arrNumber[i].toString() + " ");
        }
        console.log();
    }
}

// check if the array of arguments are not empty or if there is not only numbers
function checkError(str) {
    let valid = true;
    if (str[1] === undefined) {
        valid = false;
    } else {
        for(let i = 0; i < str.length && valid; i++) {
            if ( !(/^-?\d*\.{0,1}\d+$/.test(str[i])) ) {
                valid = false;
            }
        }
    }
    return valid;
}

// parsing
let args = process.argv.slice(2);

// assert
if(!checkError(args)) {
    console.error("error");
} else {
    let result = sort(args);
    displayArr(result);
}