// check if there is exactly one argument and if it contains '.txt'
function checkError(args) {
    valid = true;
    if(args[1] !== undefined || args[0] === undefined || !args[0].includes('.txt')) {
        valid = false;
    }
    return valid;
}

// read the .txt file, return a str
function readFile(fileName) {
    let fs = require('fs');
    let data = fs.readFileSync(fileName, 'utf8');
    return data;      
}

// return 2d array of the str, each ligne is a new array of the second dimension
function strToArr (str) {
    let arr = [];
    let i = 0; // i = arr index first dimension
    let k = 0; // k = arr index second dimension
    arr[i] = [];
    for(let j = 0; j < str.length; j++) { 
        if(str[j] == '\n') {
            i++;
            arr[i] = [];
            k = 0;
        } else {
            arr[i][k] = parseInt(str[j]);
            if(isNaN(arr[i][k])) {
                arr[i][k] = 0;
            }
            k++;
        }
    }
    return arr;
}

// display function
function displaySdk(sdk) {
    let length = Math.sqrt(sdk.length)
    let heightSquare = length;
    let widthSquare = length;
    for(let i = 0; i < sdk.length; i++) {
        if(i === heightSquare) {
            heightSquare += length;
            console.log("-----------");
        }
        for(let j = 0; j < sdk[i].length; j++) {
            if(j === widthSquare) {
                process.stdout.write('|' + sdk[i][j].toString());
                widthSquare += length;
            } else {
                process.stdout.write(sdk[i][j].toString());
            }
        }
        widthSquare = length;
        console.log();
    }
}

// check if k is not in the i line
function inLine (k, sdk, i) {
    for (let j = 0; j < sdk.length; j++) {
        if (sdk[i][j] === k) {
            return true
        }
    }
    return false;
}

// check if k is not in the j column 
function inColumn (k, sdk, j) {
    for (let i = 0; i < sdk.length; i++) {
        if (sdk[i][j] == k) {
            return true;
        }
    }
    return false;
}

// return the range of index square next to the index 
function findIndex(sdk, index) {
    let sqrt = Math.sqrt(sdk.length);
    let indexBtwn = [0, sqrt];
    for(let i = 0; i <= sdk.length && indexBtwn[1] < sdk.length; i += sqrt) {
        if(index >= indexBtwn[1]) {
            indexBtwn.splice(0, 2, indexBtwn[1], indexBtwn[1] + sqrt);
        }
    }
    return indexBtwn;
}

// check if the element at i and j index is not in the bloc square 
function inSquare(k, sdk, i, j) {
    let line = findIndex(sdk, i);
    let column = findIndex(sdk, j);
    for(let m = line[0]; m < line[1]; m++) {
        for(let l = column[0]; l < column[1]; l++) {
            if(k === sdk[m][l]) {
                return true;
            }
        }
    }
    return false;
}

// find the index of pos 
function findIndexPos (pos, sdk) {
    let cpt = 0;
    let coord = [];
    for(let i = 0; i < sdk.length; i++) {
        for(let j = 0; j < sdk[i].length; j++) {
            if(cpt === pos) {
                coord = [i, j];
                return coord;
            }
            cpt++;
        }
    }
    return coord;
}

// main and recursive function that search element by element the right combination and use the backtracking algorithm
function resolve (sdk, pos) {
    if (pos === sdk.length * sdk.length) {
        return true;
    }
    // find the right index of the position
    let coordIJ = findIndexPos(pos, sdk);
    let i = coordIJ[0];
    let j = coordIJ[1];
    if (sdk[i][j] !== 0) {
        return resolve(sdk, pos+1);
    }
    for (let k = 1; k < 10; k++) {
        if (!inLine(k,sdk,i) && !inColumn(k,sdk,j) && !inSquare(k,sdk,i,j)) {
            sdk[i][j] = k;
            if ( resolve (sdk, pos+1) ) {
                return true;
            }
        }
    }
    sdk[i][j] = 0;
    return false;
}

// normalize the sdk into a 2d array and call resolve
function exec(arg) {
    let str = readFile(arg[0]);
    let sdk = strToArr(str);
    resolve(sdk, 0);
    displaySdk(sdk);
}

// parsing 
let arg = process.argv.slice(2)

// assert
if(!checkError(arg)) {
    console.error("error");
} else {
    exec(arg);
}