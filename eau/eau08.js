// switch the first letter of a word into an Upper case
function firstCharMaj(sentence) {
    let strMaj = '';
    let toMaj;
    let j = 0;
    if(isAlphabetic(sentence.charAt(0))) {
        toMaj = sentence.charAt(0).toUpperCase();
        strMaj = toMaj;
        j++;
    }
    for(let i = j; i < sentence.length; i++) {
        if(isAlphabetic(sentence.charAt(i)) && i > 0 && sentence.charAt(i - 1) === ' ') {
            toMaj = sentence.charAt(i).toUpperCase();
            strMaj = strMaj + toMaj;
        } else {
            strMaj = strMaj + sentence.charAt(i);
        }
    }
    return strMaj;
}

// check if the letter of a word is a letter
function isAlphabetic(chr) {
    let ret = false;
    if((/[a-zA-z]/.test(chr))) {
        ret = true;
    }
    return ret;
}

// check if there is no second arguments
function checkError(args) {
    let ret = true;
    if (args[0] === undefined || args[1] !== undefined || !isNaN(args[0])  ) {
        ret = false;
    }
    return ret;
}

// parsing 
let args = process.argv.slice(2);

// assert
if (!checkError(args)) {
    console.log("error");
} else {
    let result = firstCharMaj(args[0]);
    console.log(result);
}

