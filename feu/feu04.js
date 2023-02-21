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
                arr[i][k] = '.';
            }
            k++;
        }
    }
    return arr;
}

// return a 2d array corresponding of sudoku pattern 
function arrToSdk(arr) {
    let sdk = [];
    let l = 0;
    let i = 0; 
    let j = 0;
    let saveI = i;
    let saveJ = j;
    let sqrtLength = Math.sqrt(arr.length);
    let sqrtLengthI = Math.sqrt(arr.length)
    for(let k = 0; k < arr.length; k++) {
        sdk[k] = [];
        while(i < sqrtLengthI) {
            while(j < sqrtLength) {
                sdk[k][l] = arr[i][j];
                l++;
                j++;
            }
            j = saveJ;
            i++;
        }
        j = sqrtLength;
        sqrtLength += Math.sqrt(arr.length);
        if(sqrtLength > arr.length) { 
            sqrtLengthI += Math.sqrt(arr.length);
            saveI = i;
            sqrtLength = Math.sqrt(arr.length);
            j = 0;
        } else {
            i = saveI;
        }
        l = 0;
        saveJ = j;
    }
    return sdk;
}

// return true if nbr is already in the square
function inSquare(nbr, square) {
    let isIn = false;
    for(let i = 0; i < square.length && !isIn; i++) {
        if(square[i] === nbr) {
            isIn = true;
        }
    }
    return isIn;
}

// return the range of index square next to (in line) the index 
function findIndexLine(sdk, index) {
    let indexBtwn = [0, Math.sqrt(sdk.length)];
    let sqrt = Math.sqrt(sdk.length);
    for(let i = 0; i <= sdk.length && indexBtwn[1] < sdk.length; i += sqrt) {
        if(index >= indexBtwn[1]) {
            indexBtwn.splice(0, 2, indexBtwn[1], indexBtwn[1] + sqrt);
        }
    }
    return indexBtwn;
}

// return the range of index square next to (in column) the index
function findIndexColumn(sdk, index) {
    let indexBtwn = [index, index];
    let sqrt = Math.sqrt(sdk.length);
    let find1 = false;
    let find2 = false;
    while(!find1 || !find2) {
        if(indexBtwn[0] - sqrt >= 0) {
            indexBtwn[0] -= sqrt;
        } else {
            find1 = true;
        }
        if(indexBtwn[1] + sqrt < sdk.length) {
            indexBtwn[1] += sqrt;
        } else {
            find2 = true;
        }
    }   
    return indexBtwn;
}

function inLine(nbr, sdk, i, j) {
    let isIn = false;
    let indexBtwnI = findIndexLine(sdk, i);
    let indexBtwnJ = findIndexLine(sdk, j);
    for(let k = indexBtwnI[0]; k < indexBtwnI[1] && !isIn; k++) {
        for(let l = indexBtwnJ[0]; l < indexBtwnJ[1] && !isIn; l++) {
            if(nbr === sdk[k][l]) {
                isIn = true;
            }
        }
    }
    return isIn;
}

function inColumn(nbr, sdk, i, j) {
    let isIn = false; 
    let indexBtwnI = findIndexColumn(sdk, i);
    let indexBtwnJ = findIndexColumn(sdk, j);
    let sqrt = Math.sqrt(sdk.length);
    for(let k = indexBtwnI[0]; k <= indexBtwnI[1] && !isIn; k += sqrt) {
        for(let l = indexBtwnJ[0]; l <= indexBtwnJ[1] && !isIn; l += sqrt) {
            if(nbr === sdk[k][l]) {
                isIn = true;
            }
        }  
    }
    return isIn;
}

function find(sdk, i, j, nbr) {
    let ret = '.';
    if(nbr === -1) {
        nbr = 1;
    } else {
        nbr++;
    }
    for(let k = 1; k < 10; k++) {
        if(!inSquare(nbr, sdk[i]) && !inColumn(nbr, sdk, i, j) && !inLine(nbr, sdk, i, j)) {
            ret = nbr;
            break;
        } else {
            nbr++;
        }
        if(nbr >= 10) {
            nbr = 1;
        } 
    }
    return ret;
}

// cross the sdk line by line and when the element is '.', try to find the number.
function resolve(sdk) {
    let i = 0;
    let j = 0;
    let lap = 0;
    let lineSq = 0;
    let saveIJ = [-1,-1];
    while(i < sdk.length) {
        let line = findIndexLine(sdk, i);
        i = line[0];
        while(i < line[1] && lineSq < Math.sqrt(sdk.length)) {
            let column = findIndexLine(sdk, j);
            j = column[0];
            while(j < column[1]) {
                if(sdk[i][j] === '.') {
                    sdk[i][j] = find(sdk, i, j, -1);
                    if(sdk[i][j] === '.') {
                        sdk[saveIJ[0]][saveIJ[1]] = find(sdk, saveIJ[i], save[j]);
                    }
                    saveIJ = [i,j];
                }
                j++;
                lap++;
            }
            i++;
            if(lap >= sdk.length) {
                j = column[0];
                j += Math.sqrt(sdk.length);
                i = line[0];
                lineSq++;
                lap = 0;
            } else {
                j = column[0];
            }
        }
        i = line[0];
        i += Math.sqrt(sdk.length);
        j = 0;
        lineSq = 0;
    }
}

function displaySdk(sdk) {
    let i = 0;
    let j = 0;
    let lap = 0;
    let lineSq = 0;
    while(i < sdk.length) {
        let line = findIndexLine(sdk, i);
        i = line[0];
        while(i < line[1] && lineSq < Math.sqrt(sdk.length)) {
            let column = findIndexLine(sdk, j);
            j = column[0];
            while(j < column[1]) {
                if(j === column[1] - 1) {
                    process.stdout.write(sdk[i][j].toString());
                } else {
                    process.stdout.write(sdk[i][j].toString() + '|');
                }
                j++;
                lap++;
            }
            i++;
            if(lap >= sdk.length) {
                j = column[0];
                j += Math.sqrt(sdk.length);
                i = line[0];
                lineSq++;
                lap = 0;
                console.log();
            } else {
                j = column[0];
                process.stdout.write('  ');
            }
        }
        i = line[0];
        i += Math.sqrt(sdk.length);
        j = 0;
        lineSq = 0;
        if(i < sdk.length - 1) {
            console.log("-------------------");
        }
    }
}

function exec(arg) {
    let str = readFile(arg[0]);
    let sdk = strToArr(str);
    sdk = arrToSdk(sdk);
    resolve(sdk);
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