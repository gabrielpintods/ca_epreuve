// return the array split in function of the separator
export function splitString(str, separator) {
    let strCut = [];
    let lastIndex = 0;
    let wordCut;
    for ( let i = 0; i < str.length; i++) {
        if ( equalsSeparator(i, i + separator.length, str, separator)) {
            wordCut = cutStr(lastIndex, i - 1, str);
            strCut.push(wordCut);
            lastIndex = i + separator.length;
        } else if (i === str.length - 1 && lastIndex !== 0) {
            wordCut = cutStr(lastIndex, i, str);
            strCut.push(wordCut);
        } 
    }
    if(lastIndex === 0) {
        strCut.push(str);
    }
    return strCut;
}

// check if an element of the array is equals to the separator
function equalsSeparator(iBegin, iEnd, str, separator) {
    let equals = true;
    let word = '';
    for (let i = iBegin; i < iEnd; i++) {
        word = word + str.charAt(i);
    }
    if(word !== separator) {
        equals = false;
    }
    return equals;
}

// cut the str between iBegin and iEnd
function cutStr(iBegin, iEnd, sentence) {
    let word = '';
    for(let i = iBegin; i <= iEnd; i++) {
        word = word + sentence.charAt(i);
    }
    return word;
}

// display the array, element by line
function displayArr (arrCut) {
    for (let i = 0; i < arrCut.length; i++) {
        console.log(arrCut[i]);
    }
}

// check if there is two arguments
function checkError(arrArgs) {
    let valid = true;
    if(arrArgs[0] === undefined || arrArgs[2] !== undefined) {
        valid = false;
    }
    return valid;
}

// parsing 
let args = process.argv.slice(2);

// assert 
function exec () {
    if(!checkError(args)) {
        console.error("error");
    } else {
        let result = splitString(args[0], args[1]);
        displayArr(result);
    }
}

if(process.argv[1].includes("air02.js")) {
    exec();
}