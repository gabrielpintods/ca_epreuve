// research at each character if it match wih the separator and cut the word if it match
export function splitStr(str, separator) {
    let lastIndex = 0;
    let wordCut;
    let strCut = [];
    for ( let i = 0; i < str.length; i++) {
        if (str.charAt(i) == separator) {
            wordCut = cutWord(lastIndex, i, str);
            strCut.push(wordCut);
            lastIndex = i + 1;
        } else if (i === str.length - 1) { // last character
            wordCut = cutWord(lastIndex, i + 1, str);
            strCut.push(wordCut);
        }
    }
    return strCut;
}

// cut the word of sentence between iBegin and iEnd
function cutWord(iBegin, iEnd, sentence) {
    let word = '';
    for(let i = iBegin; i < iEnd; i++) {
        word = word + sentence.charAt(i);
    }
    return word;
}

function displayArr (arrCut) {
    for (let i = 0; i < arrCut.length; i++) {
        console.log(arrCut[i]);
    }
}

// check if there is only one arguments
function checkError(arrArgs) {
    let valid = true;
    if(arrArgs[0] === undefined || arrArgs[1] !== undefined) {
        valid = false;
    }
    return valid;
}

// parsing 
let args = process.argv.slice(2);

// assert 
function exec() {
    if(!checkError(args) ) {
        console.log(process.argv[1]);
        console.error("error");
    } else {
        let space = ' ';
        let tab = '\t';
        let backLine = '\n';
        let result = splitStr(args[0], space);
        displayArr(result);
    }
}

if(process.argv[1].includes("air01.js")) {
    exec()
}