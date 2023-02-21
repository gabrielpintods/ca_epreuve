// chech if args.length = 2 and if there are only str wich includes '.txt'
function checkError(args) {
    let valid = true;
    if(args[1] === undefined || arg[2] !== undefined || !args[0].includes('.txt') || !args[1].includes('.txt')) {
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

// switch the str to a 2d array 
function switchTo2d (str) {
    let arr2d = [];
    let i = 0; // i = arr2d index first dimension
    let k = 0; // k = arr2d index second dimension
    arr2d[i] = [];
    for(let j = 0; j < str.length; j++) { 
        if(str[j] == '\n') {
            i++;
            arr2d[i] = [];
            k = 0;
        } else {
            arr2d[i][k] = str[j];
            k++;
        }
    }
    return arr2d;
}

// return a copy of the board from the top right common element of toFind 
function copyBoard(toFind, board, ind1d, ind2d) {
    let ret = [];
    let tmp = ind2d;
    for(let i = 0; i < toFind.length; i++) {
        ret[i] = [];
        for(let j = toFind[i].length - 1; j >= 0; j--) {
            if(ind1d < board.length) {
                ret[i][j] = board[ind1d][ind2d];
                ind2d--; 
            } else {
                break;
            }
        }
        ind2d = tmp;
        ind1d++;
    }
    return ret;
}

// check if toFindTmp is equals to toFind
function doesInclude(toFind, toFindTmp) {
    let include = true; 
    for(let i = 0; i < toFind.length && include; i++) {
        for(let j = 0; j < toFind[i].length; j++) {
            if( !(toFind[i][j] === toFindTmp[i][j] || toFind[i][j] === ' ')) {
                include = false;
            } 
        }
    }
    return include;
}

// search if there is a part of the board which is equals to toFind and return the coordinates of the top right element
function search(board, toFind) {
    let coord = [];
    let toFindTmp;
    let find = false;
    for(let i = 0; i < board.length && !find; i++) {
        for(let j = board[i].length - 1; j >= 0; j--) {
            if(board[i][j] === toFind[0][toFind[0].length - 1]) {
                toFindTmp = copyBoard(toFind, board, i, j);
                if(doesInclude(toFind, toFindTmp)) {
                    coord = [i, j];
                    find = true;
                    break;
                }
            }
        }
    }
    return coord;
}

// build an 2d array full of '-' except when it is the coordinates of toFind
function buildArr(board, toFind, coord) {
    let ret = [];
    let l = 0; // l = toFind index first dimension
    for(let i = 0; i < board.length; i++) { // i = board index first dimension
        ret[i] = [];
        for (let j = board[i].length - 1; j >= 0; j--) { // j = board index second dimension
            if (i === coord[0] && j === coord[1] && l < toFind.length) {
                for(let k = toFind[l].length - 1; k >= 0; k--) { // k = toFind index second dimension
                    if(toFind[l][k] === ' ') {
                        ret[i][j] = '-';
                    } else {
                        ret[i][j] = toFind[l][k];
                    }
                    j--;
                }
                if(toFind.length > 1) { // case where toFind is bigger than 1 array in the second dimension
                    coord[0]++;
                    l++;
                }
                j++;
            } else {
                ret[i][j] = '-';
            }
        }
    }
    return ret; 
}

// display the final board an return the geometrical coordinates (x, y)
function displayBoard(board) {
    let coord = [];
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            process.stdout.write(board[i][j]);
            if(coord[0] === undefined && board[i][j] !== '-') {
                coord[0] = j;
                coord[1] = (board.length - 1) - i;
            }
        }
        console.log();
    }
    return coord;
}

// conclusion
function finalMess(board, toFind, coord) {
    if(coord[0] === undefined) {
        console.log("Not Found !");
    } else {
        console.log("Find !");
        let finalBoard = buildArr(board, toFind, coord);
        coord = displayBoard(finalBoard);
        console.log("Coordinates : " + coord[0] + "," + coord[1]);
    }
}

// main function that does the execution of the script
function exec(args) {
    let board = readFile(args[0]);
    let toFind = readFile(args[1]);
    board = switchTo2d(board);
    toFind = switchTo2d(toFind);
    let coord = search(board, toFind);
    finalMess(board, toFind, coord);
}

// parsing 
let arg = process.argv.slice(2);

// assert 
if(!checkError(arg)) {
    console.error("error");
} else {
    exec(arg);
}