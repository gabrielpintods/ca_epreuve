// check if there is exactly one argument and if it contains '.txt'
function checkError(args) {
    let valid = true;
    if(args[0] !== undefined) {
        if(args[1] !== undefined || !args[0].includes('.txt')) {
            valid = false;
        }
    }
    return valid;
}

// read the .txt file, return a str
function readFile(fileName) {
    let fs = require('fs');
    let data = fs.readFileSync(fileName, 'utf8');
    return data;      
}

// return 2d array of the str, each ligne (not the first one) is a new array of the second dimension
function strToArr (str, char) {
    let arr = [];
    let i = 0; // i = arr index first dimension
    let k = 0; // k = arr index second dimension
    arr[i] = [];
    for(let j = 5; j < str.length; j++) { 
        if(str[j] === '\n') {
            i++;
            arr[i] = [];
            k = 0;
        } else if (str[j] === char[1] || str[j] === char[2]){
            arr[i][k] = str[j];
            k++;
        } else {
            console.error("error: different caracter" + str[j] + char[1] + char[2]);
            arr = null;
            break;
        }
    }
    if(arr != null && arr.length != char[0]) {
        console.error("error: different length");
        arr = null;
    }
    return arr;
}

// extract the characteres of the board 
function boardChar(str) {
    let char = [];
    for(let i = 0; i < 4; i++) {
        if(str[i] !== undefined && str[i]!= '\n') {
            char[i] = str[i];
        } else {
            console.error("error: caracter is not valid");
            char = null;
            break;
        }
    }
    return char;
}

// check if a square contains obstacle
function isValid(sqr, obstacle) {
    for(let i = 0; i < sqr.length; i++) {
        for(let j = 0; j < sqr.length; j++) {
            if(sqr[i][j] === obstacle) {
                return false;
            }
        }
    }
    return true;
}

// copy the sqr element by element
function copyArr(sqr) {
    let sqrCopy = [];
    for(let i = 0; i < sqr.length; i++) {
        sqrCopy[i] = [];
        for(let j = 0; j < sqr[i].length; j++){
            sqrCopy[i][j] = sqr[i][j];
        }
    }
    return sqrCopy;
}

// build a square corresponding to the coordinates of the board
function toSquare(board, iBeg, iEnd, jBeg, jEnd) {
    let sqr = [];
    let k = 0; // k = arr index first dimension
    let l = 0; // l = arr index second dimension
    if(iEnd >= iBeg && iEnd - iBeg === jEnd - jBeg) {
        for(let i = iBeg; i < iEnd; i++) {
            sqr[k] = [];
            for(let j = jBeg; j < jEnd; j++) {
                sqr[k][l] = board[i][j];
                l++;
            }
            l = 0;
            k++;
        }
    } else {
        sqr = null;
    }
    return sqr;
}

// check if sqr is bigger than the square save
function biggerThanSave(sqr, sqrSave) {
    if(sqr.length > sqrSave.length) {
        return true;
    } else {
        return false;
    }
}

// recursive method that find the bigger valid square of an exact point on the board
function searchSqr(board, i, iEnd, j, jEnd, obstacle) {
    let sqr = toSquare(board, i, iEnd, j, jEnd);
    if(sqr !== null) {
        if(isValid(sqr, obstacle)) {
            return sqr;
        } else {
            return searchSqr(board, i, iEnd - 1, j, jEnd - 1, obstacle);
        }
    } else {
        return null;
    }
}

// search the bigger square of the board
function biggerSqr(board, char) {
    let sqrSave = [];
    let iEnd = 0;
    let jEnd = 0;
    let res = null;
    let coord = [];
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            iEnd = board.length - i;
            jEnd = board[i].length - j;
            while(iEnd !== jEnd) {
                if(iEnd > jEnd) {
                    iEnd--;
                } else if(iEnd < jEnd) {
                    jEnd--;
                }
            }
            res = searchSqr(board, i, iEnd + i, j, jEnd + j, char[2]);
            if(res !== null) {
                if(biggerThanSave(res, sqrSave)) {
                    sqrSave = copyArr(res);
                    coord[0] = i;
                    coord[1] = j;
                    coord[2] = i + sqrSave.length - 1;
                    coord[3] = j + sqrSave.length - 1;
                }
            }
        }
    }
    return {sqrSave, coord};
}

// display the result 
function displayRes(board, coord, char) {
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if(i >= coord[0] && i <= coord[2] && j >= coord[1] && j <= coord[3]) {
                process.stdout.write(char[3]);
            } else {
                process.stdout.write(board[i][j]);
            }
        }
        console.log();
    }
}

// generate a random board
function generator() {
    let str = Math.floor(Math.random() * 8) + 1;
    str += '.' + 'x' + 'o' + '\n';
    let j = 0;
    let lineLenght = Math.floor(Math.random() * 25) + 5;
    let nbCaract = lineLenght - 1;
    for(let i = 0; i < str[0]; i++) {
        while(j < nbCaract) {
            if(Math.round(Math.random() * 5) === 0) {
                str += 'x';
            } else {
                str += '.';
            }
            j++;
        }
        nbCaract += lineLenght;
        if(i < str[0] - 1) {
            str += '\n';
        }
        j++;
    }
    return str;
}

// normalize the string from the file or the generate board into a 2d array and call biggerSqr
function exec(args) {
    let str = '';
    let char = [];
    let board = [];
    if(args[0] === undefined) {
        str = generator();
        char = boardChar(str);
        board = strToArr(str, char);
    } else {
        str = readFile(args[0]);
        char = boardChar(str);
        board = strToArr(str, char);
    }
    if(board !== null && char !== null) {
        let resExec = biggerSqr(board, char);
        // display the board
        console.log('Board: \n\n' + str + '\n\nResult: \n');
        displayRes(board, resExec.coord, char);
    } else {
        console.error("error: wrong parameter");
    }
}

// parsing
let arg = process.argv.slice(2);

// assert
if(!checkError(arg)) {
    console.log("error: fileName not valid");
} else {
    exec(arg);
}